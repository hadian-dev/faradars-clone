'use client'

import { TAppRouter } from '@/server/routers/app.routes'
import { createTRPCReact } from '@trpc/react-query'

const trpc = createTRPCReact<TAppRouter>()

export default trpc
