import { inferAsyncReturnType } from '@trpc/server'
import { NextApiRequest, NextApiResponse } from 'next'

export function createTRPCContext(arg: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  return arg
}

export type TTRPCContext = inferAsyncReturnType<typeof createTRPCContext>
