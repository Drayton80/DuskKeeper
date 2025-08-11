import { prisma } from "../database/client";
import { type ActionCategoriesCreateInput } from '../database/client.d';

export async function getActionCategories() {
  return await prisma.actionCategories.findMany();
}

export async function getActionCategoryById(id: string) {
  return await prisma.actionCategories.findUnique({
    where: {
      id,
    },
  });
}

export async function createActionCategory(
  data: ActionCategoriesCreateInput
) {
  return await prisma.actionCategories.create({
    data,
  });
}
