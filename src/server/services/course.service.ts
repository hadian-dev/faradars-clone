import { TCreateCourseInput } from '../schemas'

export const courseService = {
  createCourse: async (input: TCreateCourseInput) =>
    prisma?.course.create({ data: input }),
}
