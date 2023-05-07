import { object, string, number, optional, TypeOf } from 'zod'

export const createCategorySchema = object({
  name: string({ required_error: 'Name is required' }),
  slug: string({ required_error: 'Slug is required' }),
  image: string({ required_error: 'Image is required' }),
  cover: optional(string()),
  descriptions: optional(string()),
  parentId: optional(number()),
})

export const getCategoryListSchema = object({
  take: optional(number()),
  skip: optional(number()),
})

export const getCategorySchema = object({
  slug: optional(string()),
  id: optional(number()),
})

export type TCreateCategoryInput = TypeOf<typeof createCategorySchema>
export type TGetCategoryListInput = TypeOf<typeof getCategoryListSchema>
export type TGetCategoryInput = TypeOf<typeof getCategorySchema>
