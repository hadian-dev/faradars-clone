import '@/styles/globals.css'
import 'swiper/css'
import 'react-quill/dist/quill.snow.css'

import { PropsWithChildren } from 'react'
import { IntlProvider } from '@/providers/intl'
import { TrpcProvider } from '@/providers/trpc/trpc-provider'
import { StoreProvider } from '@/providers/store'
import { MainLayout } from '@/layouts'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'فرادرس',
  description: 'دانشگاه آنلاین فرادرس',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='fa'>
      <body suppressHydrationWarning>
        <TrpcProvider>
          <StoreProvider>
            <IntlProvider>
              <MainLayout>{children}</MainLayout>
              <Toaster
                position='top-right'
                toastOptions={{ style: { fontSize: '12px' } }}
              />
            </IntlProvider>
          </StoreProvider>
        </TrpcProvider>
      </body>
    </html>
  )
}
