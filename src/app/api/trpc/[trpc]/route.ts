import { appRouter } from '@/server/routers/app.routes'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const handler = (req: Request) => {
  return fetchRequestHandler({
    createContext: () => ({}),
    endpoint: '/api/trpc',
    router: appRouter,
    req,
  })
}

export { handler as GET, handler as POST }
