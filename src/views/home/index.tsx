'use client'

import Link from 'next/link'
import Banner from './banner'
import CategoryList from './category-list'
import PopularTutorials from './popular-tutorials'

function HomeView() {
  return (
    <div>
      <Banner />
      <CategoryList />
      {/* <CardItem /> */}

      {/* <PopularTutorials /> */}
      <div className='flex flex-col gap-1'>
        <Link href='/admin/category'>ایجاد دسته بندی</Link>
        <Link href='/admin/courses'>ایجاد آموزش</Link>
      </div>
    </div>
  )
}

export default HomeView
