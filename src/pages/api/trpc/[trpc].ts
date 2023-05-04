import * as trpcNext from '@trpc/server/adapters/next'
import { createTRPCContext } from '@/server/create-context'
import { appRouter } from '@/server/routers/app.routes'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
})
