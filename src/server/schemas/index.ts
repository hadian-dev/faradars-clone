import { CourseStateSchema } from '@/generated'
import { number, object, TypeOf } from 'zod'

export const changeCourseStateSchema = object({
  id: number(),
  status: CourseStateSchema,
})

export type TChangeCourseStateInput = TypeOf<typeof changeCourseStateSchema>
