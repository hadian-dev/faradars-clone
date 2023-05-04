import { PrismaClient } from '@prisma/client'

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default async function connectDB() {
  try {
    await prisma?.$connect()
    console.log('[PRISMA]', 'Database Connected Successfully')
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await prisma?.$disconnect()
  }
}
