import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MainLayout } from '@/layouts'
import { trpc } from '@/utils/trpc'
import { IntlProvider } from 'react-intl'
import { MESSAGES } from '@/constants'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = (router.locale || 'fa') as keyof typeof MESSAGES

  return (
    <IntlProvider locale={locale} messages={MESSAGES[locale]}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </IntlProvider>
  )
}

export default trpc.withTRPC(App)
