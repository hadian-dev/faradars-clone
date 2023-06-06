'use client'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useCallback } from 'react'

import { trpc } from '@/providers/trpc'
import { Prisma } from '@prisma/client'
import { CategoryCreateInputSchema } from '@/generated'

const initialValues: Prisma.CategoryCreateInput = {
  name: '',
  slug: '',
  image: '',
  cover: '',
  description: '',
  // parentId: 1,
}

export default function CategoryPage() {
  const create = trpc.createCategory.useMutation()

  const handleSubmit = useCallback(
    async (
      values: Prisma.CategoryCreateInput,
      helper: FormikHelpers<Prisma.CategoryCreateInput>
    ) => {
      create.mutate(values)

      if (!create.error) helper.resetForm()
    },
    [create]
  )

  return (
    <div className='flex items-center flex-col gap-4 p-4 m-4'>
      <header>
        <h1 className='text-2xl'>ایجاد دسته بندی</h1>
      </header>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(CategoryCreateInputSchema)}
      >
        <Form className='w-2/4'>
          <label className='block'>
            <span>نام</span>
            <Field
              type='text'
              name='name'
              className='p-2 rounded w-full border border-gray-300 outline-none focus:border-blue-500'
              placeholder='نام'
            />
          </label>
          <label className='block mt-4'>
            <span>کد</span>
            <Field
              type='text'
              name='slug'
              className='p-2 rounded w-full border border-gray-300 outline-none focus:border-blue-500'
              placeholder='کد'
            />
          </label>
          <label className='block mt-4'>
            <span>آیکن</span>
            <Field
              type='text'
              name='image'
              className='p-2 rounded w-full border border-gray-300 outline-none focus:border-blue-500'
              placeholder='آیکن'
            />
          </label>
          <label className='block mt-4'>
            <span>عکس</span>
            <Field
              type='text'
              name='cover'
              className='p-2 rounded w-full border border-gray-300 outline-none focus:border-blue-500'
              placeholder='عکس'
            />
          </label>
          <label className='block mt-4'>
            <span>توضیحات</span>
            <Field
              as='textarea'
              type='text'
              name='descriptions'
              className='p-2 rounded w-full border border-gray-300 outline-none focus:border-blue-500'
              placeholder='توضیحات'
            />
          </label>
          <div className='mt-8'>
            <button
              type='submit'
              className='bg-blue-600 text-white rounded w-48 px-4 py-2'
            >
              ایجاد
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
