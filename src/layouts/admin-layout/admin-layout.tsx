import { FaradarsLogoIcon } from '@/components/shared'
import { PATHS } from '@/constants'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header className='flex items-center px-6 w-full h-[70px] fixed top-0 z-40 border-b border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-300 dark:shadow-gray-900'>
        <Link href={PATHS.home.url} className='block'>
          <FaradarsLogoIcon /> فرادرس
        </Link>
      </header>
      <div className='flex w-full min-h-[inherit] h-full mt-20 p-2 gap-2'>
        <aside className='drawer lg:drawer-open w-64 h-auto rounded-lg border dark:border-gray-600'>
          <input
            id='my-drawer'
            type='checkbox'
            checked
            onChange={() => {}}
            className='drawer-toggle'
          />
          <div className='drawer-content flex flex-col items-center justify-center'>
            <label
              htmlFor='my-drawer'
              className='btn btn-info drawer-button lg:hidden'
            >
              Open drawer
            </label>
          </div>
          <div className='drawer-side'>
            <label htmlFor='my-drawer' className='drawer-overlay' />
            <ul className='menu p-4 w-full bg-base-100 text-base-content'>
              <li>
                <Link href={PATHS.adminPanel.url}>داشبرد</Link>
              </li>
              <li>
                <Link href={PATHS.adminUserList.url}>کاربران</Link>
              </li>
              <li>
                <Link href={PATHS.adminCourseList.url}>آموزش ها</Link>
              </li>
              <li>
                <Link href={PATHS.adminCategoryList.url}>دسته بندی ها</Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className='w-full border rounded-lg dark:border-gray-600'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
