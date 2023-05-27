import { procedure, router } from '../trpc'
import connectDB from '../utils/connect-db'
import * as schemas from '../schemas'
import { categoryController, courseController } from '../controllers'

connectDB()

export const appRouter = router({
  createCategory: procedure
    .input(schemas.createCategorySchema)
    .mutation(({ input }) => categoryController.createCategory({ input })),

  getCategory: procedure
    .input(schemas.getCategorySchema)
    .query(({ input }) => categoryController.getCategory({ input })),

  getCategoryList: procedure
    .input(schemas.getCategoryListSchema)
    .query(({ input }) => categoryController.getCategoryList({ input })),

  createCourse: procedure
    .input(schemas.createCourseSchema)
    .mutation(({ input }) => courseController.createCourse(input)),
})

export type TAppRouter = typeof appRouter
