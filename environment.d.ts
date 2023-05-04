import type { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined

  namespace NodeJS {
    interface ProcessEnv {
      DB_URL: string
      DB_HOST: string
      DB_PORT: number
      DB_NAME: string
      DB_USERNAME: string
      DB_PASSWORD: string

      REDIS_URL: string

      NEXT_PUBLIC_BASE_URL: string
    }
  }
}

export {}
