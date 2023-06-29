import { WithAccount } from '@/layouts/with-account'
import React from 'react'

const Layout = ({ children }: React.PropsWithChildren) => {
  return <WithAccount>{children}</WithAccount>
}

export default Layout
