import '@/styles/globals.css'
import 'swiper/css'

import { IntlProvider } from '@/providers/intl'
import { TrpcProvider } from '@/providers/trpc/trpc-provider'
import { PropsWithChildren } from 'react'

export const metadata = {
  title: 'فرادرس',
  description: 'دانشگاه آنلاین فرادرس',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='fa'>
      <body suppressHydrationWarning>
        <TrpcProvider>
          <IntlProvider>{children}</IntlProvider>
        </TrpcProvider>
      </body>
    </html>
  )
}
