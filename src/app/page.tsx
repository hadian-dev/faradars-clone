import { Preloader } from '@/providers/store'
import { categoryController, courseController } from '@/server/controllers'
import HomeView from '@/views/home'

export default async function Home() {
  const data = await categoryController.getCategoryList({
    skip: 0,
    take: 20,
    select: {
      id: true,
      name: true,
      image: true,
      slug: true,
    },
  })

  const courseList = await courseController.getCourseList({
    take: 20,
    select: {
      id: true,
      slug: true,
      name: true,
      price: true,
      imageCover: true,
    },
  })

  return (
    <>
      <Preloader categoryItems={data} courseItems={courseList} />
      <HomeView />
    </>
  )
}
