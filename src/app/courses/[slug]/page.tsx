import { PATHS } from '@/constants'
import { Preloader } from '@/providers/store'
import { courseController } from '@/server/controllers'
import CourseView from '@/views/course'
import { Course, CourseDescription } from '@prisma/client'
import { redirect } from 'next/navigation'

type PageProps = {
  params: { slug: string }
}

const CoursePage = async ({ params }: PageProps) => {
  const [id] = params.slug.split('-')
  const data = (await courseController.getCourse({
    where: { id: +id },
    include: { descriptions: {} },
  })) as Course & {
    descriptions: CourseDescription[]
  }

  if (!data) {
    redirect(PATHS.home.url)
  }

  return (
    <>
      <Preloader currentCourse={data} />
      <CourseView />
    </>
  )
}

export default CoursePage
