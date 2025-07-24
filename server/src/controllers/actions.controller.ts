import { Request, Response } from "express";
import { getActions as getActionsService } from "../services";
import { filterDefaultParams } from "./helpers";

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

    res.json(actions);
  } catch (error) {
    console.error("Error fetching actions:", error);
    res.status(500).json({
      error: "Failed to fetch actions",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
