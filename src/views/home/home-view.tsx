'use client'

import Link from 'next/link'
import Banner from './banner'
import CategoryList from './category-list'
import PopularTutorials from './popular-tutorials'
import { PATHS } from '@/constants'

function HomeView() {
  return (
    <div>
      <Banner />
      <CategoryList />
      {/* <CardItem /> */}

      <PopularTutorials />
      <div className='flex flex-col gap-1'>
        <Link href={PATHS.adminCategoryList.url}>ایجاد دسته بندی</Link>
        <Link href={PATHS.adminCourseList.url}>ایجاد آموزش</Link>
      </div>
    </div>
  )
}

export default HomeView
