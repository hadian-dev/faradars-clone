import { PATHS } from '@/constants'
import { Course } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'

type Props = {
  course: Course
}

export const CardItem = ({ course }: Props) => {
  if (!course) return null

  return (
    // <div className='relative group max-w-[355px] w-full h-full'>
    //   <Link
    //     // href={''}
    //     href={PATHS.course.as(`${course.id}-${course.slug}`)}
    //     className='flex flex-col w-full h-full bg-gray-500/10 group-hover:bg-gray-500/20 transition-colors justify-between'
    //   >
    //     <div>
    //       <div className='rounded-t-md overflow-hidden flex w-full'>
    //         <Image
    //           // src={'/public/images/bookcase.jpg'}
    //           src={course.image}
    //           width={500}
    //           height={400}
    //           sizes='500px'
    //           alt='python'
    //           className='w-full h-unset relative object-contain flex group-hover:scale-105 transition-transform'
    //         />
    //       </div>
    //       <h2 className='whitespace-pre-line py-4 px-2'>
    //         {/* test */}
    //         {course.name}
    //       </h2>
    //     </div>
    //     <div className='flex justify-between items-center bg-gray-500/30 mt-4'>
    //       <span className='p-2'>
    //         {course.price}
    //         تومان
    //       </span>
    //     </div>
    //   </Link>
    //   <button className='p-2 absolute bottom-0 left-0 bg-sky-500 hover:bg-sky-600'>
    //     <FaCartPlus className='w-6 h-6' />
    //   </button>
    // </div>

    <div className='card bg-base-100 shadow-xl'>
      <Link href={PATHS.course.as(`${course.id}-${course.slug}`)}>
        <figure>
          <Image
            src={course.image}
            alt={course.name}
            width={400}
            height={300}
            className='w-full h-unset text-sm'
          />
        </figure>
      </Link>
      <div className='card-body p-4'>
        <Link
          href={PATHS.course.as(`${course.id}-${course.slug}`)}
          className='hover:text-sky-500'
        >
          <h2 className='card-title mb-4'>{course.name}</h2>
        </Link>
        <div className='card-actions justify-between bg-gray-100 items-center rounded-lg'>
          <span className='px-2'>{course.price} تومان</span>
          <button className='btn btn-square btn-info text-white'>
            <FaCartPlus className='w-6 h-6 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
