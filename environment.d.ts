import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined

  namespace NodeJS {
    interface ProcessENV {
      DB_URL: string
      DB_HOST: string
      DB_PORT: number
      DB_NAME: string
      DB_USERNAME: string
      DB_PASSWORD: string
    }
  }
}
