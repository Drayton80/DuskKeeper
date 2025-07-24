import { meilisearchClient } from "./client";
import { Action } from "@prisma/client/runtime/library";

const INDEX_NAME = "actions";

export interface SearchActionsParams {
  query?: string;
  page?: number;
  limit?: number;
  filter?: string[];
  sort?: string[];
}

export type ActionDocument = Action & Record<string, any>;

export async function searchActions({
  query = "",
  page = 1,
  limit = 20,
  filter,
  sort,
}: SearchActionsParams) {
  const results = await meilisearchClient
    .index(INDEX_NAME)
    .search<ActionDocument>(query, {
      limit,
      offset: (page - 1) * limit,
      filter,
      sort,
      attributesToRetrieve: [
        "id",
        "name",
        "description",
        "flavor",
        "type",
        "category",
        "traits",
      ],
      attributesToHighlight: ["name", "description", "flavor"],
    });

  return results;
}

export async function indexAction(action: ActionDocument): Promise<void> {
  await meilisearchClient.index(INDEX_NAME).addDocuments([action]);
}

export async function indexActions(actions: ActionDocument[]): Promise<void> {
  await meilisearchClient.index(INDEX_NAME).addDocuments(actions);
}

export async function deleteActionFromIndex(actionId: string): Promise<void> {
  await meilisearchClient.index(INDEX_NAME).deleteDocument(actionId);
}

export async function updateActionInIndex(
  action: ActionDocument
): Promise<void> {
  await meilisearchClient.index(INDEX_NAME).updateDocuments([action]);
}

export async function getActionSettings(): Promise<any> {
  return await meilisearchClient.index(INDEX_NAME).getSettings();
}

export async function updateActionSettings(settings: any): Promise<void> {
  await meilisearchClient.index(INDEX_NAME).updateSettings(settings);
}
