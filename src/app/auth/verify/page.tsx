import { PATHS } from '@/constants'
import Link from 'next/link'
import React from 'react'

function VerifyPage() {
  return (
    <div className='border border-gray-300 dark:border-gray-700 rounded-lg p-8 m-1 max-w-[450px] bg-gray-200 dark:bg-gray-900'>
      <h1 className='text-2xl text-center mb-8'>ایمیل خود را بررسی کنید</h1>
      <p className='text-center'>
        ما یک لینک به ایمیل شما ارسال کردیم، پس از دریافت روی دکمه ورود کلیک
        کنید.
      </p>
      <div className='flex gap-3 items-center justify-center mt-10'>
        <Link
          href={PATHS.home.url}
          className='bg-gray-400 dark:bg-gray-800 py-1 px-3 rounded text-sky-400'
        >
          صفحه اصلی
        </Link>
        <Link
          href={PATHS.login.url}
          className='bg-gray-400 dark:bg-gray-800 py-1 px-3 rounded text-green-400'
        >
          ویرایش ایمیل
        </Link>
      </div>
    </div>
  )
}

export default VerifyPage
