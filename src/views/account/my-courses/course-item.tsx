import React from 'react'
import { Button } from '@/components/shared'
import Image from 'next/image'
import { Course } from '@/generated'
import { useRouter } from 'next/navigation'
import { PATHS } from '@/constants'

type Props = {
  course: Course
}

const CourseItem = ({ course }: Props) => {
  const { id, slug, name, image, status, enabled } = course
  const { push } = useRouter()

  const goToManage = () => {
    push(PATHS.updateCourse.as(`${id}-${slug}`))
  }

  return (
    <div className='relative border rounded border-gray-300 dark:border-gray-600 mt-8'>
      <div className='flex flex-col md:flex-row justify-between p-4 gap-4'>
        <div className='flex flex-col md:flex-row w-fit gap-4'>
          <Image
            src={image || '/images/picture.png'}
            alt='image'
            width={100}
            height={100}
            className='w-28 h-28'
          />
          <div className='flex flex-col justify-between w-fit'>
            <h1 className='md:whitespace-nowrap text-xl font-bold mb-4 md:mt-2'>
              {name}
            </h1>
            {status === 'DRAFT' && (
              <div className='flex gap-4 md:mb-2'>
                <h2>پیش نویس</h2>
                <h2 className='text-gray-500'>منتشر شده</h2>
              </div>
            )}
            {status === 'PUBLISHED' && (
              <div className='flex gap-4 md:mb-2'>
                <h2 className='text-gray-500'>پیش نویس</h2>
                <h2>منتشر شده</h2>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:pr-8 gap-4 md:w-2/3'>
          <p className='w-fit whitespace-nowrap'>میزان پیشرفت</p>
          <progress
            className='progress progress-success w-full'
            value={1}
            max={100}
          />
        </div>
        {enabled && (
          <Button
            onClick={goToManage}
            variant='primary-outline'
            className='absolute left-4 top-4 md:top-auto md:bottom-4'
          >
            مدیریت / ویرایش
          </Button>
        )}
      </div>
    </div>
  )
}

export default CourseItem
