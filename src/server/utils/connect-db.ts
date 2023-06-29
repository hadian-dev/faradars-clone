import { PrismaClient } from '@prisma/client'

export const prisma = global.prisma || new PrismaClient()

export default async function connectDB() {
  try {
    await prisma?.$connect()

    if (process.env.NODE_ENV !== 'production') {
      global.prisma = prisma
    }

    console.log('[PRISMA]', 'Database Connected Successfully')
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma?.$disconnect()
  }
}
