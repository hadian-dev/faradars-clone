'use client'

// import { useRouter } from 'next/navigation'
import { IntlProvider } from 'react-intl'

import { MESSAGES } from '@/constants'

export const Provider = ({ children }: React.PropsWithChildren) => {
  // const router = useRouter()
  // const locale = (router.locale || 'fa') as keyof typeof MESSAGES
  return (
    <IntlProvider locale={'fa'} messages={MESSAGES['fa']}>
      {children}
    </IntlProvider>
  )
}
