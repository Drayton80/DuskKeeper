import { prisma } from "../database/client";
import type { Prisma } from "@prisma/client";

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
  data: Prisma.actionCategoriesCreateInput
) {
  return await prisma.actionCategories.create({
    data,
  });
}
