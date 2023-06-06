'use client'

import { TAppRouter } from '@/server/routers/app.routes'
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<TAppRouter>()
