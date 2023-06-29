import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { IoIosApps } from 'react-icons/io'
import { MdSupportAgent, MdLogout } from 'react-icons/md'
import { PATHS } from '@/constants'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useAppSelector } from '@/redux/store'

const links = [
  { label: 'اطلاعت کاربری', path: PATHS.myInfo, Icon: FiUser },
  { label: 'یادگیری های من', path: PATHS.account, Icon: ImBooks },
  { label: 'آموزش های من', path: PATHS.myCourses, Icon: IoIosApps },
  { label: 'نظرات', path: PATHS.myComments, Icon: FaRegCommentDots },
  { label: 'علاقه مندی ها', path: PATHS.myWishlist, Icon: FaRegHeart },
  { label: 'پشتیبانی', path: PATHS.myTickets, Icon: MdSupportAgent },
]

const AccountLayout = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname()
  const account = useAppSelector((state) => state.account)

  return (
    <div className='flex w-full min-h-[inherit] h-full p-2 gap-2'>
      <aside className='fixed z-10 top-22 right-2 min-h-[inherit] lg:pos-unset'>
        <div className='w-auto rounded-lg min-h-[inherit] overflow-hidden bg-base-100 shadow-lg shadow-zinc-400/30 dark:shadow-zinc-900'>
          <div className='group'>
            <div className='w-full h-8 p-0 group-hover:flex group-hover:w-auto lg:h-auto lg:p-4 bg-sky-500 dark:bg-sky-600 lg:flex justify-center flex-col items-center gap-2'>
              <div className='avatar hidden lg:block lg:p-2 mb-2 border border-gray-200 w-fit m-auto rounded-full'>
                <Image
                  width={80}
                  height={80}
                  sizes='80px'
                  alt='graduate'
                  src='/images/graduate.png'
                  // className='w-6 h-6 group-hover:w-full group-hover:h-full lg:w-full lg:h-full rounded-full'
                />
              </div>
              {/* <span>محمد هادیان</span> */}
              <span className='hidden lg:inline-block uppercase tracking-widest text-white'>
                {account.email}
              </span>
            </div>
            <ul>
              {links.map((link) => (
                <li
                  key={link.label}
                  className={`hover:text-sky-500 hover:dark:text-sky-300 ${
                    link.path.url === pathname
                      ? 'bg-sky-300/50 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300 border-l-4 border-sky-500 dark:border-sky-600'
                      : ''
                  }`}
                >
                  <Link
                    className='p-2 lg:p-4 flex gap-2 items-center'
                    href={link.path.url}
                    title={link.label}
                  >
                    <link.Icon
                      className={`w-6 h-6 ${
                        link.path.url === pathname ? 'text-sky-600' : ''
                      }`}
                    />
                    <span className='hidden w-0 group-hover:w-auto group-hover:inline-block text-sm lg:w-auto lg:inline-block'>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li
                key={'logout'}
                className={`hover:text-red-600 hover:dark:text-red-400`}
              >
                <button
                  className='p-2 lg:p-4 flex gap-2 items-center'
                  onClick={() => signOut()}
                  title='خروج از حساب'
                >
                  <MdLogout className='w-6 h-6' />
                  <span className='hidden text-sm group-hover:w-auto group-hover:inline-block lg:inline-block'>
                    خروج از حساب
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className='mr-10 lg:mr-0 pr-2 lg:pr-0 w-[inherit] min-h-[inherit]'>
        <div className='rounded-lg h-full border border-gray-200 dark:border-gray-800 shadow-lg shadow-zinc-400/40 dark:shadow-zinc-900'>
          {children}
        </div>
      </main>
    </div>
  )
}

export default AccountLayout
