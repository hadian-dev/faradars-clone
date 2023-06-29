'use client'

import { Button } from '@/components/shared'
import { useAppSelector } from '@/redux/store'
import React from 'react'

const CourseView = () => {
  const current = useAppSelector((state) => state.course.current)

  if (!current) return <p>آموزش مورد نظر یافت نشد</p>

  return (
    <div className='max-w-[1300px] m-auto p-4'>
      <header className='mb-3'>
        <h1 className='py-4 text-3xl'>{current.name}</h1>
      </header>
      <div className='flex gap-4'>
        <main className='w-3/4'>
          <video
            controls
            className='rounded-lg w-full mb-4'
            poster={current.image}
          >
            <source src={current.videoCover || ''} type='video/mp4' />
          </video>
          {current.descriptions.map((desc) => (
            <div key={desc.id}>
              <div
                className='text-sm view ql-editor'
                dangerouslySetInnerHTML={{ __html: desc.content }}
              />
            </div>
          ))}
        </main>
        <aside className='w-1/4'>
          <div className='sticky top-[88px] border border-gray-300 dark:border-gray-700 rounded-lg p-4'>
            <div className='flex justify-between mb-4'>
              <span>هزینه آموزش</span>
              <span>
                {current.price === 0 ? 'رایگان' : `${current.price} تومان`}
              </span>
            </div>

            <div className='mt-4 pt-2'>
              <div className='flex justify-between mb-2'>
                <span>تعداد دانشجویان</span>
                <span>{32} نفر</span>
              </div>
            </div>

            <div className='border-b border-gray-300 dark:border-gray-700 mt-4 mb-4 pb-2 pt-2'>
              <div className='flex justify-between mb-2'>
                <span>مدت زمان</span>
                <span>{current.duration}</span>
              </div>
            </div>

            <Button variant='success' className='py-2 min-w-full block'>
              {current.price > 0 ? 'خرید آموزش' : 'دریافت آموزش به صورت رایگان'}
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default CourseView
