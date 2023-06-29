import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './slices/categorySlice'
import courseReducer from './slices/courseSlice'
import accountReducer from './slices/account-slice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    course: courseReducer,
    account: accountReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
