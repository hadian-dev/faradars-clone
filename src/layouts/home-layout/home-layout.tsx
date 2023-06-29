'use client'

import React from 'react'
import { useMediaQuery } from '@/hooks'
import ClientLayout from './client'
import MobileLayout from './mobile'

const HomeLayout = ({ children }: React.PropsWithChildren) => {
  const isMobile = useMediaQuery('(max-width:768px)')

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <ClientLayout>{children}</ClientLayout>
  )
}

export default HomeLayout
