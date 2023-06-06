import { Course, Prisma } from '@prisma/client'
import { prisma } from '../utils/connect-db'

export const courseController = {
  getCourseList: async (input: Prisma.CourseFindManyArgs) => {
    const data = await prisma.course.findMany(input)

    return JSON.parse(JSON.stringify(data)) as Course[]
  },

  getCourse: async (input: Prisma.CourseFindUniqueArgs) => {
    const data = await prisma.course.findUnique(input)

    return data ? (JSON.parse(JSON.stringify(data)) as Course) : null
  },

  createCourse: async (input: Prisma.CourseCreateArgs) => {
    return prisma.course.create(input)
  },

  createCourseDescriptions: async (
    input: Prisma.CourseDescriptionCreateManyArgs
  ) => {
    return prisma.courseDescription.createMany(input)
  },
}
