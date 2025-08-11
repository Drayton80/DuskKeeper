import { Request, Response } from "express";
import {
  getActionCategories as getActionCategoriesService,
  createActionCategory as createActionCategoryService,
} from "../services";
import { type ActionCategoriesCreateInput } from "../database/client.d";

export async function getActionCategories(req: Request, res: Response) {
  try {
    const categories = await getActionCategoriesService();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      error: "Failed to fetch categories",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function createActionCategory(
  req: Request<{}, {}, ActionCategoriesCreateInput>,
  res: Response
) {
  try {
    const category = await createActionCategoryService(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({
      error: "Failed to create category",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
