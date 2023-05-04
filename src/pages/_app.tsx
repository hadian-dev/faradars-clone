import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MainLayout } from '@/layouts'
import { trpc } from '@/utils/trpc'

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default trpc.withTRPC(App)
