'use client'
import { CardItem } from '@/components/organisms'
import { Pagination } from '@/components/shared'
import React from 'react'

import FilterPanel from './filter-panel'
import SortBar from './sort-bar'
import { useAppSelector } from '@/redux/store'

const CoursesView = () => {
  const courseList = useAppSelector((state) => state.course.items)

  return (
    <>
      <div className='border-b border-gray-700 bg-gray-800'>
        <div className='max-w-[1300px] m-auto flex gap-2 p-4'>
          <span>خانه</span>
          <span>/</span>
          <span>جستجوی آموزش ها</span>
        </div>
      </div>
      <div className='flex p-4 gap-2 max-w-[1300px] m-auto'>
        <FilterPanel />
        <div className='w-4/5'>
          <SortBar />
          <div className='h-full'>
            {!!courseList.length && (
              <div className='gap-1 grid grid-cols-4 mt-5 mb-8'>
                {courseList.map((course) => (
                  <CardItem key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
          {courseList.length > 24 && (
            <Pagination
              totalItems={courseList.length / 24}
              page={1}
              setPage={() => {}}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default CoursesView
