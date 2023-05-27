'use client'
import { setCategoryItems } from '@/redux/slices'
import { store } from '@/redux/store'
import { Category } from '@prisma/client'
import { useRef } from 'react'

type Props = {
  categoryItems: Category[]
}

export const Preloader = ({ categoryItems }: Props) => {
  const loaded = useRef(false)

  if (!loaded.current) {
    store.dispatch(setCategoryItems(categoryItems))
    loaded.current = true
  }

  return null
}
