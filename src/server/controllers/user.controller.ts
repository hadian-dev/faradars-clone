import { Prisma } from '@prisma/client'
import { prisma } from '../utils/connect-db'

export const userController = {
  getUser: async (args: Prisma.UserFindUniqueArgs) => {
    const data = await prisma.user.findUnique(args)

    return data
  },

  getInstructor: async (input: Prisma.InstructorFindUniqueArgs) => {
    return prisma.instructor.findUnique(input)
  },

  becomeInstructor: async (input: Prisma.InstructorCreateInput) => {
    return prisma.instructor.create({ data: input })
  },
}
