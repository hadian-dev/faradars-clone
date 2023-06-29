import { Spinner } from '@/components/shared'
import { trpc } from '@/providers/trpc'
import React from 'react'

const CourseListView = () => {
  const { isLoading, data: courseList } = trpc.getCourseList.useQuery({
    where: { status: 'STARTED' },
    select: { name: true, id: true },
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
      <div>
        {courseList?.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseListView
