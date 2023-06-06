'use client'

import React, { ReactNode } from 'react'
import { useMediaQuery } from '@/hooks'
import ClientLayout from './client'
import MobileLayout from './mobile'

type Props = {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  const isMobile = useMediaQuery('(max-width:768px)')

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <ClientLayout>{children}</ClientLayout>
  )
}
