'use client'

import { Spinner } from '@/components/shared'
import { Category, Course } from 'prisma/prisma-client'
import { trpc } from '@/providers/trpc'
import Image from 'next/image'
import React from 'react'

type DataType = Course & { categories: { category: Category }[] }

const CourseListView = () => {
  const { isLoading, data: courseList } = trpc.getCourseList.useQuery<
    any,
    DataType[]
  >({
    where: { status: 'STARTED' },
    select: {
      name: true,
      id: true,
      categories: {
        select: { category: { select: { name: true, id: true } } },
      },
    },
  })

  if (isLoading) {
    return (
      <div className='w-full min-h-[200px] h-full flex justify-center items-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <div className='flex gap-1 items-center p-2 justify-between'>
        <input
          type='text'
          placeholder='جستجو'
          className='input input-bordered w-full max-w-xl'
        />
      </div>
      <ul className='mt-3 border-t dark:border-gray-600'>
        {courseList?.map((item) => (
          <CourseItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default CourseListView

function CourseItem({ item }: { item: DataType }) {
  const onChange = () => {}

  return (
    <li className='p-2 border-b dark:border-gray-600 flex items-center'>
      <input type='checkbox' className='checkbox checkbox-info m-2' />
      <div className='flex items-center justify-between w-full gap-4 p-2 pr-4 mr-4 border-r dark:border-gray-600'>
        <div className='flex items-center gap-4'>
          <div className='avatar'>
            <div className='mask mask-squircle w-16 h-16'>
              <Image
                width={64}
                height={64}
                alt={item.name}
                src={item.image || '/images/picture.png'}
              />
            </div>
          </div>
          <div>
            <div className='font-bold'>{item.name}</div>
            {/* <div className='text-sm opacity-50'>China</div> */}
          </div>
        </div>
        <div>
          {item.categories.map(({ category }) => (
            <div key={category.id}>{category.name}</div>
          ))}
        </div>
      </div>
    </li>
  )
}
