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
    where: { slug: { not: { equals: '__root__' } } },
  })

  const courseList = await courseController.getCourseList({
    where: { status: 'PUBLISHED' },
    take: 20,
    select: {
      id: true,
      slug: true,
      name: true,
      price: true,
      image: true,
    },
  })

  return (
    <>
      <Preloader categoryItems={data} courseItems={courseList} />
      <HomeView />
    </>
  )
}
