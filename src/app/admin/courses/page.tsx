'use client'

import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useCallback } from 'react'

import { createCourseSchema, TCreateCourseInput } from '@/server/schemas'
import { Button, Textarea, TextInput } from '@/components/shared'
import trpc from '@/providers/trpc'

const initialValues: TCreateCourseInput = {
  name: '',
  slug: '',
  imageCover: '',
  price: 0,
  videoCover: '',
  duration: '',
}
const CreateCoursePage = () => {
  const createCourse = trpc.createCourse.useMutation()

  const handleSubmit = useCallback(
    async (
      values: TCreateCourseInput,
      helper: FormikHelpers<TCreateCourseInput>
    ) => {
      const data = await createCourse.mutateAsync(values)

      if (data?.id) {
        helper.resetForm()
        console.log('success')
      } else {
        console.log(createCourse.error)
      }
    },
    [createCourse]
  )

  return (
    <div className='flex items-center flex-col gap-4 p-4 m-4'>
      <header>
        <h1 className='text-2xl'>ایجاد آموزش</h1>
      </header>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(createCourseSchema)}
      >
        <Form className='w-2/4'>
          <Field as={TextInput} className='mb-2' name='name' label='نام' />
          <Field as={TextInput} className='mb-2' name='slug' label='کد' />
          <Field
            as={TextInput}
            className='mb-2'
            name='imageCover'
            label='عکس'
          />
          <Field
            as={TextInput}
            className='mb-2'
            name='duration'
            label='زمان دوره'
          />
          <Field
            as={TextInput}
            type='number'
            className='mb-2'
            name='price'
            label='قیمت دوره'
          />
          <Field
            as={TextInput}
            className='mb-2'
            name='videoCover'
            label='ویدیو'
          />

          <div className='mt-8'>
            <Button variant='success'>ایجاد</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateCoursePage
