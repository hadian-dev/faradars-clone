import { TAppRouter } from '@/server/routers/app.routes'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import SuperJSON from 'superjson'

const trpc = createTRPCNext<TAppRouter>({
  config: ({ ctx }) => ({
    // headers: () => (ctx?.req ? { ...ctx.req.headers, 'x-ssr': '1' } : {}),
    links: [
      httpBatchLink({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/trpc` }),
    ],
    transformer: SuperJSON,
  }),
  ssr: true,
})
