import { prisma } from "../database/client";
import { type ActionCreateInput } from '../database/client.d';
import { ActionDocument, indexActions, searchActions } from "../meilisearch";

interface GetActionsParams {
  query?: string;
  page?: number;
  limit?: number;
  filter?: string[];
  sort?: string[];
}

export async function getActions({
  query,
  page = 1,
  limit = 20,
  filter,
  sort,
}: GetActionsParams) {
  if (query) {
    const results = await searchActions({
      query,
      page,
      limit,
      filter,
      sort,
    });
    return results;
  }

  const skip = (page - 1) * limit;
  const [total, items] = await Promise.all([
    prisma.actions.count(),
    prisma.actions.findMany({
      skip,
      take: limit,
      include: {
        actionCategories: true,
        actionTraits: {
          include: {
            traits: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  return {
    hits: items,
    page,
    limit,
    totalHits: total,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getActionById(id: string) {
  return await prisma.actions.findUnique({
    where: { id },
    include: {
      actionCategories: true,
      actionTraits: {
        include: {
          traits: true,
        },
      },
    },
  });
}

export async function createActions(actions: ActionCreateInput[]) {
  const categoryIds = [
    ...new Set(actions.map((a) => a.actionCategories?.connect?.id ?? "")),
  ];
  const existingCategories = await prisma.actionCategories.findMany({
    where: {
      id: {
        in: categoryIds,
      },
    },
  });

  if (existingCategories.length !== categoryIds.length) {
    const missingIds = categoryIds.filter(
      (id) => !existingCategories.find((c) => c.id === id)
    );
    throw new Error(`Categories not found: ${missingIds.join(", ")}`);
  }

  const createdActions = await Promise.all(
    actions.map((action) =>
      prisma.actions.create({
        data: action,
        include: {
          actionCategories: true,
          actionTraits: {
            include: {
              traits: true,
            },
          },
        },
      })
    )
  );

  const actionDocuments = createdActions.map((action) => ({
    id: action.id,
    name: action.name,
    description: action.description,
    category: action.actionCategories.name,
    traits: action.actionTraits.map((at) => at.traits.name),
  })) as unknown as ActionDocument[];

  await indexActions(actionDocuments);

  return createdActions;
}
