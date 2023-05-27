import '@/styles/globals.css'
import 'swiper/css'

import { PropsWithChildren } from 'react'
import { IntlProvider } from '@/providers/intl'
import { TrpcProvider } from '@/providers/trpc/trpc-provider'
import { StoreProvider } from '@/providers/store'

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
            <IntlProvider>{children}</IntlProvider>
          </StoreProvider>
        </TrpcProvider>
      </body>
    </html>
  )
}
