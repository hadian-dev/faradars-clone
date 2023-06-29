import React from 'react'
import Link from 'next/link'
import { BiError } from 'react-icons/bi'

import { PATHS } from '@/constants'

function AuthErrorPage() {
  return (
    <div className='border border-red-300 dark:border-red-700 rounded-lg p-8 m-1 max-w-[450px] bg-gray-200 dark:bg-gray-900'>
      <h1 className='text-2xl font-bold text-center mb-8'>
        <BiError className='text-red-500 w-10 h-10' /> امکان ورود وجود ندارد
      </h1>
      <p className='text-center'>
        لینک ورود به سیستم دیگر معتبر نیست. ممکن است قبلا استفاده شده باشد یا
        تاریخ مصرف آن تمام شده باشد.
      </p>
      <div className='flex gap-3 items-center justify-center mt-10'>
        <Link
          href={PATHS.home.url}
          className='bg-gray-400 dark:bg-gray-800 py-2 px-6 rounded text-sky-400'
        >
          صفحه اصلی
        </Link>
      </div>
    </div>
  )
}

export default AuthErrorPage
