// import { TRPCError } from '@trpc/server'
import { Category, Prisma } from '@prisma/client'
import { prisma } from '../utils/connect-db'

export const categoryController = {
  createCategory: async (input: Prisma.CategoryCreateInput) => {
    // try {
    // const category = await
    return prisma.category.create({ data: input })

    // return category
    // } catch (error: any) {
    //   console.log(error)
    //   if (error.code === 'P2002') {
    //     throw new TRPCError({
    //       code: 'CONFLICT',
    //       message: error.message,
    //     })
    //   }

    //   throw error
    // }
  },

  getCategory: async (input: Prisma.CategoryFindUniqueArgs) => {
    const category = await prisma.category.findUnique(input)

    return category ? (JSON.parse(JSON.stringify(category)) as Category) : null
  },

  getCategoryList: async (input: Prisma.CategoryFindManyArgs) => {
    const list = await prisma.category.findMany(input)

    return JSON.parse(JSON.stringify(list)) as Category[]
  },
}
