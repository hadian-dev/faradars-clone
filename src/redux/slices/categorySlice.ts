import { Category } from '@prisma/client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICategoryState {
  items: Category[]
}

const initialState: ICategoryState = {
  items: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryItems: (state, { payload }: PayloadAction<Category[]>) => {
      state.items = payload
    },
  },
})

export const { setCategoryItems } = categorySlice.actions
export default categorySlice.reducer
