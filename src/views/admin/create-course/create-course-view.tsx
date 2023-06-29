'use client'

import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Formik, FormikHelpers } from 'formik'
import React, { useCallback, useEffect } from 'react'

import { trpc } from '@/providers/trpc'
import { CreateCourseInputType, initialValues } from './initial-values'
import { CourseCreateInputSchema } from '@/generated'
import CreateForm from './create-form'
import toast from 'react-hot-toast'

const CreateCourseView = () => {
  const createCourse = trpc.createCourse.useMutation()

  useEffect(() => {
    if (createCourse.data) {
      toast.success('آموزش با موفقیت ساخته شد')
    }
  }, [createCourse.data])

  const handleSubmit = useCallback(
    async (
      { descriptionList, ...values }: CreateCourseInputType,
      helper: FormikHelpers<CreateCourseInputType>
    ) => {
      const reg = /<[a-z]+>|<\/[a-z]+>/g
      const isValidDesc = descriptionList.every(
        (desc) => !!desc.content.replace(reg, '')
      )

      if (!isValidDesc) {
        toast.error('مقدار توضیحات نباید خالی باشد')
        return
      }

      const descriptions = descriptionList.map(({ position, content }) => ({
        position,
        content,
      }))

      createCourse.mutate({
        data: {
          ...values,
          htmlDescriptions: { createMany: { data: descriptions } },
        },
      })

      // const data = await createCourse.mutateAsync({ ...values, imageCover })

      // if (data?.id) {
      //   helper.resetForm()
      // } else {
      //   console.log(createCourse.error)
      // }
    },
    [createCourse]
  )

  return (
    <div className='flex items-center flex-col gap-4 p-4 m-4'>
      <header>
        <h1 className='text-2xl'>ایجاد آموزش</h1>
      </header>
      <div className='relative'>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={toFormikValidationSchema(CourseCreateInputSchema)}
        >
          {(props) => <CreateForm {...props} />}
        </Formik>
      </div>
    </div>
  )
}

export default CreateCourseView
