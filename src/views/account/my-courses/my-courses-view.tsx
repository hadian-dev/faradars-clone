'use client'

import { Button, SearchInput, Select } from '@/components/shared'
import { PATHS } from '@/constants'
import { trpc } from '@/providers/trpc'
import { useAccount } from '@/redux/hooks'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import CourseItem from './course-item'

const MyCoursesView = () => {
  const { push } = useRouter()
  const { account } = useAccount()
  const instructor = trpc.getInstructor.useQuery({
    where: { userId: account.id },
  })
  const { data: myCourse, isLoading } = trpc.getCourseList.useQuery({
    where: {
      instructors: { some: { instructor: { id: instructor.data?.id } } },
    },
    select: { id: true, slug: true, name: true, status: true, image: true },
  })

  const createCourse = () => {
    push(PATHS.createCourseStep1.url)
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>آموزش های من</h1>
      <div className='flex flex-col sm:flex-row gap-8 justify-between mt-10 border-t border-gray-300 dark:border-gray-600 pt-4'>
        <div className='flex gap-4 w-full lg:w-1/2'>
          <SearchInput placeholder='جستجو در آموزش ها' />
          <Select
            options={[{ code: 'newest', name: 'جدیدترین ها' }]}
            defaultValue={{ code: 'newest', name: 'جدیدترین ها' }}
            onSelect={() => null}
          />
        </div>

        <button className='btn btn-success' onClick={createCourse}>
          ساخت آموزش جدید
        </button>
      </div>
      {isLoading && <span className='loading loading-spinner loading-md' />}
      {myCourse?.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  )
}

export default MyCoursesView
