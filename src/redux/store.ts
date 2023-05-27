import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    categoryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector