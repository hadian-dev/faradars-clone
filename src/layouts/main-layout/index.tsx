import React, { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

type Props = {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}