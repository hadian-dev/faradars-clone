'use client'

import React from 'react'
import { Button } from '@/components/shared'
import {
  BenefitSVG,
  CelebratingSVG,
  FinancialSVG,
  IDCardSVG,
  TeacherSVG,
  TeachingSVG,
} from '@/assets/svgs'
import { Features } from '@/components/organisms'
import PublishSteps from './publish-steps'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { PATHS } from '@/constants'

const reasons = [
  {
    title: 'به روش خودت آموزش بده',
    icon: TeacherSVG,
    desc: `آموزش های خودت را بساز و به روشی که مایلی منتشر کن و همیشه بر محتوای آموزشت کنترل داشته باش`,
  },
  {
    title: 'الهام بخش دیگران باش',
    icon: CelebratingSVG,
    desc: `با آموزش دانش خود به دانشجویان، کمک کن تا مهارت جدید کسب کنند، علایق خود را کشف کنند و در شغل خود پیشرفت کنند `,
  },
  {
    title: 'عضویت در هیات علمی فرادرس',
    icon: IDCardSVG,
    desc: `میتونی عضوی از هیات علمی بزرگترین دانشگاه کشور بر بستر وب باشی، دانش و تجربه خود را بدون محدودیت به اشتراک بزاری`,
  },
  {
    title: 'پاداش و مزایای ویژه',
    icon: BenefitSVG,
    desc: `ارتباط کاری و حرفه ای خودت رو گسترش بده و با انتشار آموزش های با کیفیت تعداد دانشجویان را افزایش بده و درآمد ویژه ای کسب کن`,
  },
]

const TeachingView = () => {
  const { status } = useSession()
  const { push } = useRouter()

  const getStarted = () => {
    const infoUrl = PATHS.myCourses.url

    if (status === 'authenticated') {
      push(infoUrl)
      return
    }

    push(PATHS.login.as(`?redirect=${infoUrl}`))
  }

  return (
    <>
      <section className='max-w-[1250px] m-auto p-2'>
        <div className='flex flex-col items-center sm:flex-row-reverse justify-between max-h-[700px] mb-12'>
          <TeachingSVG className='max-w-[400px] mb-8 md:mb-0 lg:max-w-[650px]' />
          <div>
            <div className='flex flex-col justify-center h-full'>
              <h1 className='text-3xl font-bold md:text-4xl'>
                بیا و با ما آموزش بده
              </h1>
              <p className='mt-2 mb-6'>
                یک مدرس شوید و زندگی ها را تغییر دهید، از جمله زندگی خودتان
              </p>
              {/* <Button
                variant='light'
                onClick={getStarted}
                className='w-full max-w-[420px] py-2 text-xl hover:shadow-lg hover:dark:shadow-white'
              >
                شروع کنید
              </Button> */}
              <button onClick={getStarted} className='btn btn-neutral'>
                شروع کنید
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 dark:bg-gray-500/20 p-8 mb-12'>
        <h1 className='text-center text-2xl font-bold md:text-4xl mb-10'>
          چند تا دلیل برای شروع
        </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
          {reasons.map((item) => (
            <li
              key={item.title}
              className='flex flex-col justify-center items-center p-6'
            >
              <item.icon width='100' height='100' className='text-base' />
              <h2 className='mt-5 text-center text-xl font-bold'>
                {item.title}
              </h2>
              <p className='mt-3 text-center text-sm'>{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className='bg-info p-1 text-white md:p-8 flex justify-center mb-8'>
        <Features />
      </section>
      <PublishSteps />
      <section className='bg-gray-600/30 p-6 mb-8'>
        <div className='max-w-[1250px] m-auto'>
          <div className='flex flex-col gap-2 md:flex-row items-center justify-between'>
            <div className='max-w-[500px] md:max-w-[600px]'>
              <h1 className='text-2xl font-bold mb-4'>پلن‌های مالی تدریس</h1>
              <p className='text-justify mb-4'>
                آموزش‌های منتشر شده، با ذکر نام مولف، در وزارت ارشاد ثبت رسمی
                می‌شوند و تحت حمایت حقوقی وزارت ارشاد قرار می‌گیرند. در کنار این
                موضوع، از بعد مادی نیز فرادرس پلن‌هایی را برای پرداخت به مدرسین
                ایجاد کرده است.
              </p>

              <Link
                href='#'
                className='btn btn-warning'
                // className='py-3 px-6 block w-fit text-center rounded-md bg-yellow-400 dark:bg-yellow-600 border border-yellow-600 dark:border-yellow-400 hover:bg-yellow-500 hover:dark:bg-yellow-700'
              >
                مشاهده پلن های مالی تدریس
              </Link>
            </div>
            <FinancialSVG className='max-w-[500px]' />
          </div>
        </div>
      </section>
      <section className='mb-10 py-10 px-6'>
        <div className='flex flex-col justify-center items-center h-full m-auto max-w-[600px]'>
          <h1 className='text-3xl font-bold md:text-3xl'>
            از همین امروز یک مدرس باش
          </h1>
          <p className='mt-4 mb-6'>
            به یکی از بزرگترین پلتفرم های آموزش جهان بپیونید و اوج یگیرید
          </p>
          {/* <Button
            variant='light'
            onClick={getStarted}
            className='w-full max-w-[420px] py-2 text-xl hover:shadow-lg hover:dark:shadow-white'
          >
            شروع کنید
          </Button> */}
          <button
            className='btn btn-neutral w-full max-w-[420px]'
            onClick={getStarted}
          >
            شروع کنید
          </button>
        </div>
      </section>
    </>
  )
}

export default TeachingView
