import { Prisma } from '@prisma/client'

export const initialValues: Prisma.InstructorCreateInput = {
  degree: '',
  grade: '',
  htmlContent: '',
  user: {},
  educationalBackground: {},
}
