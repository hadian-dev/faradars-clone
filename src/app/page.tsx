import { Preloader } from '@/providers/store'
import { categoryController } from '@/server/controllers'
import HomeView from '@/views/home'

export default async function Home() {
  const data = await categoryController.getCategoryList({
    input: { skip: 0, take: 20 },
  })

  return (
    <>
      <Preloader categoryItems={data} />
      <HomeView />
    </>
  )
}
