import { Prisma } from '@prisma/client'
import { prisma } from '../utils/connect-db'
import { TGetCategoryListInput } from '../schemas/category.schema'

export const categoryService = {
  createCategory: async (input: Prisma.CategoryCreateInput) =>
    prisma.category.create({ data: input }),

  updateCategory: async (
    where: Prisma.CategoryWhereUniqueInput,
    input: Prisma.CategoryUpdateInput,
    select?: Prisma.CategorySelect
  ) => prisma.category.update({ where, data: input, select }),

  getCategory: async (where: Partial<Prisma.CategoryWhereUniqueInput>) =>
    prisma.category.findUnique({ where }),

  getCategoryList: async (input: TGetCategoryListInput) =>
    prisma.category.findMany(input),
}
