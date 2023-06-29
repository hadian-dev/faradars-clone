import type { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined

  namespace NodeJS {
    interface ProcessEnv {
      // Database
      DB_URL: string
      DB_HOST: string
      DB_PORT: number
      DB_NAME: string
      DB_USERNAME: string
      DB_PASSWORD: string

      // Authentication
      EMAIL_SERVER: string
      EMAIL_FROM: string
      AUTH_SECRET: string
      JWT_SECRET: string

      NEXT_PUBLIC_BASE_URL: string
    }
  }
}

export {}
