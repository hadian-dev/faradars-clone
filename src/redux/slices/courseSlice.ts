import { Course, CourseDescription } from '@prisma/client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CourseWithDescriptions = Course & {
  descriptions: CourseDescription[]
}

export interface ICourseState {
  items: Course[]
  totalItems: number
  current: CourseWithDescriptions | null
}

const initialState: ICourseState = {
  items: [],
  totalItems: 0,
  current: null,
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseItems: (state, { payload }: PayloadAction<Course[]>) => {
      state.items = payload
    },
    setCurrentCourse: (
      state,
      { payload }: PayloadAction<CourseWithDescriptions>
    ) => {
      state.current = payload
    },
  },
})

export const { setCourseItems, setCurrentCourse } = courseSlice.actions
export default courseSlice.reducer
