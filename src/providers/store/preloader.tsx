'use client'
import {
  setCategoryItems,
  setCourseItems,
  setCurrentCourse,
} from '@/redux/slices'
import { store } from '@/redux/store'
import { Category, Course, CourseDescription } from '@prisma/client'
import { useRef } from 'react'

type Props = {
  categoryItems?: Category[]
  courseItems?: Course[]
  currentCourse?: Course & {
    descriptions: CourseDescription[]
  }
}

export const Preloader = ({
  categoryItems,
  courseItems,
  currentCourse,
}: Props) => {
  const loaded = useRef(false)

  if (!loaded.current) {
    categoryItems && store.dispatch(setCategoryItems(categoryItems))
    courseItems && store.dispatch(setCourseItems(courseItems))
    currentCourse && store.dispatch(setCurrentCourse(currentCourse))

    loaded.current = true
  }

  return null
}
