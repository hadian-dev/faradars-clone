'use client'

import { Spinner } from '@/components/shared'
import { PATHS } from '@/constants'
import { trpc } from '@/providers/trpc'
import { updateAccount } from '@/redux/slices'
import { useAppDispatch } from '@/redux/store'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

type Props = {
  onUnauthenticated?: () => void
}

function AccountWrapper({
  email,
  children,
}: PropsWithChildren<{ email: string }>) {
  const dispatch = useAppDispatch()
  const { data } = trpc.getUser.useQuery({
    where: { email },
    select: { id: true, name: true, phone: true, email: true, image: true },
  })

  useEffect(() => {
    if (data) {
      dispatch(updateAccount(data))
    }
  }, [data, dispatch])

  return <>{data && children}</>
}

export function WithAccount({
  onUnauthenticated,
  children,
}: PropsWithChildren<Props>) {
  const session = useSession()
  const pathname = usePathname()
  const { replace } = useRouter()

  const unauthenticated = session.status === 'unauthenticated'
  const isLoading = session.status === 'loading'

  useEffect(() => {
    if (isLoading) return

    if (unauthenticated) {
      onUnauthenticated?.()
      return
    }

    if (!session.data?.user) {
      replace(PATHS.home.url)
    }
  }, [
    unauthenticated,
    isLoading,
    onUnauthenticated,
    pathname,
    session.data?.user,
    replace,
  ])

  if (unauthenticated || !session.data?.user?.email) return null

  if (isLoading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <Spinner loading />
      </div>
    )
  }

  return (
    <AccountWrapper email={session.data.user.email}>{children}</AccountWrapper>
  )
}
