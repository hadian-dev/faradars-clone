import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'
import { TTRPCContext } from './create-context'

const t = initTRPC.context<TTRPCContext>().create({
  transformer: SuperJSON,
})

export const router = t.router
export const procedure = t.procedure
