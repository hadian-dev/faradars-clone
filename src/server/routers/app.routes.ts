import { procedure, router } from '../trpc'
import connectDB from '../utils/connect-db'
import * as schemas from '@/generated'
import {
  categoryController,
  courseController,
  userController,
} from '../controllers'

connectDB()

export const appRouter = router({
  createCategory: procedure
    .input(schemas.CategoryCreateInputSchema)
    .mutation(({ input }) => categoryController.createCategory(input)),

  getCategory: procedure
    .input(schemas.CategoryFindUniqueArgsSchema)
    .query(({ input }) => categoryController.getCategory(input)),

  getCategoryList: procedure
    .input(schemas.CategoryFindManyArgsSchema)
    .query(({ input }) => categoryController.getCategoryList(input)),

  getCourseList: procedure
    .input(schemas.CourseFindManyArgsSchema)
    .query(({ input }) => courseController.getCourseList(input)),

  getCourse: procedure
    .input(schemas.CourseFindUniqueArgsSchema)
    .query(({ input }) => courseController.getCourse(input)),

  createCourse: procedure
    .input(schemas.CourseCreateArgsSchema)
    .mutation(({ input }) => courseController.createCourse(input)),

  createCourseDescriptions: procedure
    .input(schemas.CourseDescriptionCreateManyArgsSchema)
    .mutation(({ input }) => courseController.createCourseDescriptions(input)),
  createCategoryOnCourse: procedure
    .input(schemas.CategoriesOnCourseCreateArgsSchema)
    .mutation(({ input }) => courseController.createCategoryOnCourse(input)),
  createInstructorOnCourse: procedure
    .input(schemas.InstructorsOnCourseCreateArgsSchema)
    .mutation(({ input }) => courseController.createInstructorOnCourse(input)),

  getUser: procedure
    .input(schemas.UserFindUniqueArgsSchema)
    .query(({ input }) => userController.getUser(input)),
  getInstructor: procedure
    .input(schemas.InstructorFindUniqueArgsSchema)
    .query(({ input }) => userController.getInstructor(input)),
  becomeInstructor: procedure
    .input(schemas.InstructorCreateInputSchema)
    .mutation(({ input }) => userController.becomeInstructor(input)),
})

export type TAppRouter = typeof appRouter
