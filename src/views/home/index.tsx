'use client'

import Link from 'next/link'
import Banner from './banner'
import CategoryList from './category-list'
import PopularTutorials from './popular-tutorials'
import { Category } from '@prisma/client'
type PropsType = {
  data: Category[] | undefined
}
function HomeView({ data }: PropsType) {
  return (
    <div>
      <Banner />
      <CategoryList data={data} />
      {/* <CardItem /> */}

      {/* <PopularTutorials /> */}
      <Link href='/admin/category'>ایجاد دسته بندی</Link>
    </div>
  )
}

export default HomeView
