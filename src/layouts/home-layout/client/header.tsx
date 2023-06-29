import { Search } from '@/components/organisms'
import { PATHS } from '@/constants'
import { Dropdown, FaradarsLogoIcon, MenuIcon } from '@/shared'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'

function Header() {
  const { data, status } = useSession()
  const [accountUrl, setAccountUrl] = useState('')

  useEffect(() => {
    if (status === 'loading') return

    if (data?.user) {
      setAccountUrl(PATHS.account.url)
    } else {
      setAccountUrl(PATHS.login.url)
    }
  }, [data, status])

  return (
    <header className='sticky bg-base-100 top-0 bg-transparent backdrop-blur-md z-40 border-b border-gray-300 dark:border-b-gray-600'>
      <div className='px-4 py-2 flex gap-2 justify-between items-center max-w-[1300px] m-auto'>
        <div className='flex gap-4 lg:w-1/5'>
          {/* <Link className='p-1'>
            <MenuIcon />
          </Link> */}
          {/* <Dropdown>
            <Link href={PATHS.adminCourseList.url}>پروداکت لیست</Link>
          </Dropdown> */}
          <Link className='p-1' href={PATHS.home.url}>
            <FaradarsLogoIcon /> فرادرس
          </Link>
        </div>
        <div className='flex gap-2 w-2/3 lg:w-1/2'>
          <Search />
          <Link
            href={PATHS.courses.url}
            className='rounded-lg w-auto flex justify-center items-center px-4 whitespace-nowrap focus:outline-none border border-sky-400 text-sky-500 dark:text-sky-400 hover:bg-sky-500/20 hover:dark:bg-sky-400/20 focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors'
          >
            همه آموزش ها
          </Link>
        </div>
        <div className='flex gap-4 items-center justify-end lg:w-1/4'>
          <Link
            href={data?.user ? PATHS.myCourses.url : PATHS.teaching.url}
            title={data?.user ? 'آموزش های من' : 'تدریس در فرادس'}
            className='flex gap-2 items-center hover:text-sky-500'
          >
            <FaChalkboardTeacher className='w-5 h-5' />
            <span className='hidden lg:inline-block text-sm'>
              {data?.user ? 'آموزش های من' : 'تدریس در فرادس'}
            </span>
          </Link>
          <Link
            href={accountUrl}
            title={'حساب کاربری'}
            className='flex gap-2 items-end hover:text-sky-500'
          >
            <FiUser className='w-5 h-5' />
            <span className='hidden lg:inline-block text-sm'>حساب کاربری</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
