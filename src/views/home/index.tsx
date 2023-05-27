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
      <Link href='/admin/category'>ایجاد دسته بندی</Link>
    </div>
  )
}

export default HomeView
