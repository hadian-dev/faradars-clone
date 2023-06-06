import React from 'react'
import Header from './header'
import Footer from './footer'

const MobileLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className='min-h-[90vh]'>{children}</main>
      <Footer />
    </>
  )
}

export default MobileLayout
