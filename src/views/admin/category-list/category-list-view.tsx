'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import AddCategory from './add-category'
import { Dialog } from '@/components/shared'
import { trpc } from '@/providers/trpc'
import { Category } from '@/generated'

const CategoryListView = () => {
  const { data } = trpc.getCategoryList.useQuery({
    take: 30,
    where: { slug: { not: { equals: '__root__' } } },
    select: { name: true, id: true, image: true, cover: true },
  })
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    if (!dialogRef.current) return

    dialogRef.current.showModal()
  }

  return (
    <div className='max-w-[1200px] m-auto p-4'>
      <Dialog innerRef={dialogRef}>
        <AddCategory />
      </Dialog>
      <div className='flex gap-1 items-center p-2 justify-between'>
        <input
          type='text'
          placeholder='جستجو'
          className='input input-bordered w-full max-w-xl'
        />
        <button className='btn btn-success' onClick={openDialog}>
          افزودن دسته بندی
        </button>
      </div>
      <ul className='mt-3 border-t dark:border-gray-600'>
        {data?.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

function CategoryItem({ item }: { item: Category }) {
  const onChange = () => {}

  return (
    <li className='p-2 border-b dark:border-gray-600 flex items-center'>
      <input type='checkbox' className='checkbox checkbox-info m-2' />
      <div className='flex items-center gap-4 p-2 pr-4 mr-4 border-r dark:border-gray-600'>
        <div className='avatar'>
          <div className='mask mask-squircle w-16 h-16'>
            <Image width={64} height={64} src={item.image} alt={item.name} />
          </div>
        </div>
        <div>
          <div className='font-bold'>{item.name}</div>
          {/* <div className='text-sm opacity-50'>China</div> */}
        </div>
      </div>
    </li>
  )
}

export default CategoryListView
