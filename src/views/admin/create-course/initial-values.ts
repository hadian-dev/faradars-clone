import { Prisma } from '@prisma/client'

export enum FieldName {
  NAME = 'name',
  SLUG = 'slug',
  IMAGE = 'image',
  PRICE = 'price',
  ORIGINAL_PRICE = 'originalPrice',
  VIDEO_COVER = 'videoCover',
  DURATION = 'duration',
  SIZE = 'size',
  TYPE = 'type',
  ENABLED = 'enabled',
  LANGUAGE = 'language',
  DESCRIPTION_LIST = 'descriptionList',
}

export type TDescription = {
  index: number
  content: string
  position: number
  saved: boolean
}

export const initialDescription = {
  content: '',
  index: 1,
  position: 1,
  saved: true,
}

export type CreateCourseInputType = {
  descriptionList: TDescription[]
} & Prisma.CourseCreateInput

export const initialValues: CreateCourseInputType = {
  [FieldName.NAME]: '',
  [FieldName.SLUG]: '',
  [FieldName.IMAGE]: '',
  [FieldName.PRICE]: 0,
  [FieldName.ORIGINAL_PRICE]: 0,
  [FieldName.VIDEO_COVER]: '',
  [FieldName.DURATION]: '',
  [FieldName.SIZE]: '',
  [FieldName.TYPE]: 'ONLINE',
  [FieldName.ENABLED]: true,
  [FieldName.LANGUAGE]: 'FA',
  [FieldName.DESCRIPTION_LIST]: [initialDescription],
}
