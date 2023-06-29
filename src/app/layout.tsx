import '@/styles/globals.css'
import 'swiper/css'
import 'react-quill/dist/quill.snow.css'

import { PropsWithChildren } from 'react'
import { IntlProvider } from '@/providers/intl'
import { TrpcProvider } from '@/providers/trpc/trpc-provider'
import { StoreProvider } from '@/providers/store'
import { MainLayout } from '@/layouts'

import { AuthProvider } from '@/providers/auth'
import NProgressBar from '@/providers/progress-bar'

export const metadata = {
  title: 'فرادرس',
  description: 'دانشگاه آنلاین فرادرس',
}

export default async function RootLayout(props: PropsWithChildren) {
  return (
    <html lang='fa'>
      <body suppressHydrationWarning>
        <TrpcProvider>
          <AuthProvider>
            <StoreProvider>
              <IntlProvider>
                <MainLayout>{props.children}</MainLayout>
                <NProgressBar />
              </IntlProvider>
            </StoreProvider>
          </AuthProvider>
        </TrpcProvider>
      </body>
    </html>
  )
}
