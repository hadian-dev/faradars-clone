import { Preloader } from '@/providers/store'
import { courseController } from '@/server/controllers'
import CoursesView from '@/views/courses'

const CoursesPage = async () => {
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
    <div>
      <Preloader courseItems={courseList} />
      <CoursesView />
    </div>
  )
}

export default CoursesPage
