import { object, string, number, optional, TypeOf } from 'zod'

export const createCourseSchema = object({
  name: string({ required_error: 'Name is required' }),
  slug: string({ required_error: 'Slug is required' }),
  imageCover: string({ required_error: 'Image is required' }),
  duration: string({ required_error: 'duration is required' }),
  price: number({ required_error: 'price is required' }),
  VideoCover: optional(string()),
  descriptions: optional(string()),
})

export type TCreateCourseInput = TypeOf<typeof createCourseSchema>
