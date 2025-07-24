import { dbClient } from "../database/client";
import { indexAction, searchActions, ActionDocument } from "../meilisearch";

interface GetActionsParams {
  query?: string;
  page?: number;
  limit?: number;
  filter?: string[];
  sort?: string[];
}

export async function getActions({
  query,
  page,
  limit,
  filter,
  sort,
}: GetActionsParams) {
  const results = await searchActions({
    query,
    page,
    limit,
    filter,
    sort,
  });

  return results;
}

export async function getActionById(id: string) {
  return await dbClient.action.findUnique({
    where: { id },
  });
}

export async function createAction(actionData: ActionDocument) {
  const action = await dbClient.action.create({
    data: actionData,
  });

  await indexAction(action);

  return action;
}
