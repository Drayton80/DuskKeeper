import { Request, Response } from "express";

export async function getActions(req: Request, res: Response) {
  const { query } = req.query;
  const results = { query };

  res.json(results);
}
