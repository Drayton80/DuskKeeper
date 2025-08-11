import { Request, Response } from "express";
import {
  getActions as getActionsService,
  createActions as createActionsService,
} from "../services";
import { filterDefaultParams } from "./helpers";
import { type ActionCreateInput } from "../database/client.d";

export async function getActions(req: Request, res: Response) {
  const {
    query: reqQuery,
    page: reqPage,
    limit: reqLimit,
    filter: reqFilter,
    sort: reqSort,
  } = req.query;

  const { query, page, limit, filter, sort } = filterDefaultParams({
    reqQuery,
    reqPage,
    reqLimit,
    reqFilter,
    reqSort,
  });

  try {
    const actions = await getActionsService({
      query,
      page,
      limit,
      filter,
      sort,
    });

    res.status(200).json(actions);
  } catch (error) {
    console.error("Error fetching actions:", error);
    res.status(500).json({
      error: "Failed to fetch actions",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function createActions(
  req: Request<{}, {}, ActionCreateInput[]>,
  res: Response
) {
  const actions = req.body;

  try {
    const result = await createActionsService(actions);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating actions:", error);
    res.status(400).json({
      error: "Failed to create actions",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
