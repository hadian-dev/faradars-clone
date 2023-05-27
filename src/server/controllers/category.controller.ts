import { TRPCError } from '@trpc/server'
import {
  TCreateCategoryInput,
  TGetCategoryInput,
  TGetCategoryListInput,
} from '../schemas/category.schema'
import { categoryService } from '../services/category.service'

export const categoryController = {
  createCategory: async ({ input }: { input: TCreateCategoryInput }) => {
    try {
      const category = await categoryService.createCategory(input)

      return category
    } catch (error: any) {
      console.log(error)
      if (error.code === 'P2002') {
        throw new TRPCError({
          code: 'CONFLICT',
          message: error.message,
        })
      }

      throw error
    }
  },

  getCategory: async ({ input }: { input: TGetCategoryInput }) => {
    try {
      if (!input.id && !input.slug) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid Input, id or slug is required',
        })
      }

      const category = await categoryService.getCategory({
        slug: input.slug,
        id: input.id,
      })

      if (!category) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid Input, Category not found',
        })
      }

      return JSON.parse(JSON.stringify(category))
    } catch (error) {
      throw error
    }
  },

  getCategoryList: async ({ input }: { input: TGetCategoryListInput }) => {
    try {
      const list = await categoryService.getCategoryList(input)

      return JSON.parse(JSON.stringify(list))
    } catch (error) {
      throw error
    }
  },
}
