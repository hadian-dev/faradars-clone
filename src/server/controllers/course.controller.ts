import { TCreateCourseInput } from '../schemas'
import { courseService } from '../services'

export const courseController = {
  createCourse: async (input: TCreateCourseInput) =>
    courseService.createCourse(input),
  //   try {
  //     const data = await courseService.createCourse(input)
  //     return data
  //   } catch (error) {
  //     throw error
  //   }
  // },
}
