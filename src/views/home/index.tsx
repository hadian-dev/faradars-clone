import { trpc } from '@/utils'
import Banner from './banner'
import CategoryList from './category-list'

function HomeView() {
  const hello = trpc.getHello.useQuery({ text: 'here i am' })
  console.log(hello.data)
  return (
    <div>
      <Banner />
      <CategoryList />
    </div>
  )
}

export default HomeView
