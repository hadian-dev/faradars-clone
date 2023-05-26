import { PATHS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
export const CardItem = () => {
  return (
    <div className='relative group'>
      <Link
        href={PATHS.product.as('10-python-programming-basic')}
        className='flex flex-col w-fit bg-gray-500/10 group-hover:bg-gray-500/20 transition-colors'
      >
        <div className='rounded-t-md overflow-hidden'>
          <Image
            src='https://faradars.org/wp-content/uploads/2022/12/20/fvpht0064-svg.svg'
            width={250}
            height={200}
            alt='python'
            className='group-hover:scale-105 transition-transform'
          />
        </div>
        <h2 className='whitespace-pre-line py-4 px-2'>
          {'آموزش برنامه نویسی پایتون\n Python - مقدماتی'}
        </h2>
        <div className='flex justify-between items-center bg-gray-500/30 mt-4'>
          <span className='p-2'>290000 تومان</span>
        </div>
      </Link>
      <button className='p-2 absolute bottom-0 left-0 bg-sky-500 hover:bg-sky-600'>
        <FaCartPlus className='w-6 h-6' />
      </button>
    </div>
  )
}
