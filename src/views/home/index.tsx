import Link from 'next/link'
import Banner from './banner'
import CategoryList from './category-list'

function HomeView() {
  return (
    <div>
      <Banner />
      <CategoryList />
      <Link href='/admin/category'>ایجاد دسته بندی</Link>
    </div>
  )
}

export default HomeView
