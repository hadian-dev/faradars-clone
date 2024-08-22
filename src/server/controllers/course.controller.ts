import { Course, Prisma } from '@prisma/client'
import { prisma } from '../utils/connect-db'
import { TChangeCourseStateInput } from '../schemas'

export const courseController = {
  getCourseList: async (input: Prisma.CourseFindManyArgs) => {
    const data = await prisma.course.findMany(input)

    return JSON.parse(JSON.stringify(data)) as typeof data
  },

  getCourse: async (input: Prisma.CourseFindUniqueArgs) => {
    const data = await prisma.course.findUnique(input)

    return data ? (JSON.parse(JSON.stringify(data)) as Course) : null
  },

  changeCourseState: async ({ id, status }: TChangeCourseStateInput) => {
    return prisma.course.update({ where: { id }, data: { status } })
  },

  createCourse: async (input: Prisma.CourseCreateArgs) => {
    return prisma.course.create(input)
  },

  createCourseDescriptions: async (
    input: Prisma.CourseDescriptionCreateManyArgs
  ) => {
    return prisma.courseDescription.createMany(input)
  },

  createCategoryOnCourse: async (
    input: Prisma.CategoriesOnCourseCreateArgs
  ) => {
    return prisma.categoriesOnCourse.create(input)
  },

  createInstructorOnCourse: async (
    input: Prisma.InstructorsOnCourseCreateArgs
  ) => {
    return prisma.instructorsOnCourse.create(input)
  },
}
