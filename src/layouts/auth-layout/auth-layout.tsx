'use client'

import React, { useEffect } from 'react'
import { Button, FaradarsLogoIcon, Spinner } from '@/shared'
import { PATHS } from '@/constants'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const AuthLayout = ({ children }: React.PropsWithChildren) => {
  const { back, replace } = useRouter()
  const session = useSession()

  const authenticated = session.status === 'authenticated'
  const isLoading = session.status === 'loading'

  useEffect(() => {
    if (isLoading) return

    if (authenticated) {
      replace(PATHS.account.url)
    }
  }, [authenticated, isLoading, replace])

  if (authenticated) return null

  if (isLoading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <Spinner loading />
      </div>
    )
  }

  return (
    <>
      <header className='sticky top-0 bg-transparent backdrop-blur-md z-10 border-b border-zinc-300 dark:border-b-gray-700'>
        <div className='p-3 flex gap-2 justify-between items-center m-auto'>
          <button
            className='py-2 px-4 bg-base-100 hover:bg-base-200 rounded-md flex gap-1'
            onClick={back}
            title='برگشت'
          >
            <BsArrowRight className='w-6 h-6' /> برگشت
          </button>
        </div>
      </header>
      <main className='p-1 pt-[10%] min-h-[93vh] w-full flex flex-col gap-12 items-center'>
        <Link className='p-1 block gap-2' href={PATHS.home.url}>
          <FaradarsLogoIcon /> <span>فرادرس</span>
        </Link>
        {children}
      </main>
    </>
  )
}

export default AuthLayout
