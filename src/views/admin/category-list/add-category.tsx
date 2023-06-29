'use client'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useCallback } from 'react'

import { trpc } from '@/providers/trpc'
import { Prisma } from '@prisma/client'
import { CategoryCreateInputSchema } from '@/generated'
import { toast } from 'react-hot-toast'
import { TextInput, Textarea } from '@/components/shared'

const initialValues: Prisma.CategoryCreateInput = {
  name: '',
  slug: '',
  image: '',
  cover: '',
  description: '',
  // parentId: 1,
}

const AddCategory = () => {
  const create = trpc.createCategory.useMutation()

  const handleSubmit = useCallback(
    async (
      values: Prisma.CategoryCreateInput,
      helper: FormikHelpers<Prisma.CategoryCreateInput>
    ) => {
      console.log(values)
      const data = await create.mutateAsync(values)

      if (data.id) {
        toast.success('با موفقیت ایجاد شد')
        helper.resetForm()
      } else if (create.error) {
        toast.error(create.error.message)
      }
    },
    [create]
  )

  return (
    <div className='flex items-center flex-col gap-4 p-4'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(CategoryCreateInputSchema)}
      >
        <Form className='sm:w-[500px] flex flex-col gap-2'>
          <Field as={TextInput} label='نام' name='name' placeholder='نام' />
          <Field as={TextInput} label='کد' name='slug' placeholder='کد' />
          <Field as={TextInput} label='آیکن' name='image' placeholder='آیکن' />
          <Field as={TextInput} label='عکس' name='cover' placeholder='عکس' />
          <Field as={Textarea} name='description' label='توضیحات' />
          <button type='submit' className='btn btn-success w-full mt-8'>
            ایجاد
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddCategory
