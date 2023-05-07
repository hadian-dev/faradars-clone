import { procedure, router } from '../trpc'
import connectDB from '../utils/connect-db'
import {
  createCategorySchema,
  getCategoryListSchema,
  getCategorySchema,
} from '../schemas/category.schema'
import { categoryController } from '../controllers/category.controller'

connectDB()

export const appRouter = router({
  createCategory: procedure
    .input(createCategorySchema)
    .mutation(({ input }) => categoryController.createCategory({ input })),

  getCategory: procedure
    .input(getCategorySchema)
    .query(({ input }) => categoryController.getCategory({ input })),

  getCategoryList: procedure
    .input(getCategoryListSchema)
    .query(({ input }) => categoryController.getCategoryList({ input })),
})

export type TAppRouter = typeof appRouter
