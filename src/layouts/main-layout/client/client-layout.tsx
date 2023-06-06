import React from 'react'
import Header from './header'
import Footer from './footer'

const ClientLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main className='min-h-[90vh] m-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default ClientLayout
