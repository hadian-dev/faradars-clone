'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getFetch, httpBatchLink, loggerLink } from '@trpc/client'
import { useState } from 'react'
import SuperJSON from 'superjson'

import { trpc } from './trpc'

export const TrpcProvider = ({ children }: React.PropsWithChildren) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  )
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({ enabled: () => true }),
        httpBatchLink({
          url: '/api/trpc/',
          fetch: async (input, init) => {
            const fetch = getFetch()
            return fetch(input, { ...init, credentials: 'include' })
          },
        }),
      ],
      transformer: SuperJSON,
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
