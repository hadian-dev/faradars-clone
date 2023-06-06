import { Search } from '@/components/organisms'
import { PATHS } from '@/constants'
import { Button, FaradarsLogoIcon, MenuIcon } from '@/shared'
import Link from 'next/link'
import { FaChalkboardTeacher, FaUserCircle } from 'react-icons/fa'

function Header() {
  return (
    <header className='sticky top-0 bg-transparent backdrop-blur-md z-10 border-b border-zinc-300 dark:border-b-gray-700'>
      <div className='p-4 flex gap-2 justify-between items-center max-w-[1300px] m-auto'>
        <div className='flex gap-4 w-1/5'>
          <button className='p-1'>
            <MenuIcon />
          </button>
          <Link className='p-1' href={PATHS.home.url}>
            <FaradarsLogoIcon />
          </Link>
        </div>
        <div className='flex gap-4 w-1/2'>
          <Search />
          <Link
            href={PATHS.courses.url}
            className='rounded w-auto flex justify-center items-center p-2 whitespace-nowrap focus:outline-none border border-sky-500 text-sky-500 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-600/20 hover:dark:bg-sky-400/20 focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors'
          >
            همه آموزش ها
          </Link>
        </div>
        <div className='flex gap-4 items-center justify-end w-1/4'>
          <button className='flex gap-2 items-center'>
            <FaChalkboardTeacher className='w-6 h-6' />
            <span>تدریس در فرادس</span>
          </button>
          <button className='flex gap-2 items-center'>
            <FaUserCircle className='w-6 h-6' />
            <span>حساب کاربری</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
