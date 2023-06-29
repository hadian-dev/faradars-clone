'use client'

import { usePathname, useRouter } from 'next/navigation'
import HomeLayout from './home-layout'
import AuthLayout from './auth-layout'
import { WithAccount } from './with-account'
import { PATHS } from '@/constants'
import AccountLayout from './account-layout'
import AdminLayout from './admin-layout'

export const MainLayout = (props: React.PropsWithChildren) => {
  const pathname = usePathname()
  const { replace } = useRouter()

  if (pathname.includes('/auth')) {
    return <AuthLayout {...props} />
  }

  if (pathname.includes('/admin')) {
    return (
      <WithAccount onUnauthenticated={() => replace(PATHS.login.url)}>
        <AdminLayout {...props} />
      </WithAccount>
    )
  }

  if (pathname.includes('/account')) {
    console.log(pathname)
    return (
      <WithAccount onUnauthenticated={() => replace(PATHS.login.url)}>
        <HomeLayout>
          <AccountLayout {...props} />
        </HomeLayout>
      </WithAccount>
    )
  }

  return <HomeLayout {...props} />
}
