import { z } from 'zod'
import { procedure, router } from '../trpc'
import connectDB from '../utils/connect-db'

connectDB()

export const appRouter = router({
  getHello: procedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      return { message: `hello world "${input.text}"` }
    }),
})

export type TAppRouter = typeof appRouter
