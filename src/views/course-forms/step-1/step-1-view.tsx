'use client'

import { Button, Select, TextInput } from '@/components/shared'
import { PATHS } from '@/constants'
import { trpc } from '@/providers/trpc'
import { useAppSelector } from '@/redux/store'
import { normalizeString } from '@/utils'
import { Prisma, Instructor } from '@prisma/client'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

enum FieldName {
  NAME = 'name',
  SLUG = 'slug',
  PRICE = 'price',
  ORIGINAL_PRICE = 'originalPrice',
  DURATION = 'duration',
  IMAGE = 'image',
  CATEGORY = 'category',
}

type FormState = {
  category: { name: string; code: string; id: number }
} & Prisma.CourseCreateInput

const initialValue: FormState = {
  [FieldName.NAME]: '',
  [FieldName.SLUG]: '',
  [FieldName.PRICE]: 0,
  [FieldName.ORIGINAL_PRICE]: 0,
  [FieldName.DURATION]: '',
  [FieldName.IMAGE]: '',
  [FieldName.CATEGORY]: { name: '', code: '', id: 0 },
}

const validationSchema = z.object({
  [FieldName.NAME]: z
    .string({ required_error: 'نام آموزش ضروری است' })
    .min(10, 'طول عنوان نباید کمتر از 10 حرف باشد')
    .max(70, 'طول عنوان نباید بیشتر از 70 حرف باشد'),
  [FieldName.CATEGORY]: z.object({
    code: z.string({ required_error: 'دسته بندی آموزش را مشخص نمایید' }),
    name: z.string(),
  }),
  [FieldName.DURATION]: z.string({
    required_error: 'مدت زمان تقریبی آموزش چند ساعت است',
  }),
})

const Step1View = () => {
  const account = useAppSelector((state) => state.account)
  const { replace } = useRouter()

  const becomeInstructor = trpc.becomeInstructor.useMutation()
  const createCourse = trpc.createCourse.useMutation()
  const createCategoryCourse = trpc.createCategoryOnCourse.useMutation()
  const createInstructorCourse = trpc.createInstructorOnCourse.useMutation()

  const instructorData = trpc.getInstructor.useQuery({
    where: { userId: account.id },
  })
  const categories = trpc.getCategoryList.useQuery({
    where: { slug: { not: { equals: '__root__' } } },
    select: { name: true, slug: true, id: true },
  })

  const [state, setState] = useState({ loading: false, disabled: false })

  const submitCourse = async (
    { category, ...values }: FormState,
    instructor: Instructor
  ) => {
    const withSlug = { ...values, slug: normalizeString(values.name) }
    const course = await createCourse.mutateAsync({ data: withSlug })
    const categoryCourse = await createCategoryCourse.mutateAsync({
      data: { categoryId: category.id, courseId: course.id },
    })
    const instructorCourse = await createInstructorCourse.mutateAsync({
      data: { instructorId: instructor.id, courseId: course.id },
    })

    if (course && categoryCourse && instructorCourse) {
      toast.success('آموزش با موفقیت ساخته شد')
      replace(PATHS.myCourses.url)
      return
    }

    if (
      createCourse.error ||
      createCategoryCourse.error ||
      createInstructorCourse.error
    ) {
      toast.error(
        'مشکلی در ایجاد آموزش پیش آمد، پس از بررسی اطلاعات مجدد تلاش کنید'
      )
    }
  }

  const onSubmit = async (values: FormState) => {
    if (state.disabled) return

    setState({ loading: true, disabled: true })
    console.log(instructorData.data)
    if (instructorData.data) {
      submitCourse(values, instructorData.data)
      return
    }

    const teacher = await becomeInstructor.mutateAsync({
      user: { connect: { id: account.id } },
    })

    submitCourse(values, teacher)
  }

  return (
    <div className='max-w-[900px] m-auto p-4 md:p-10'>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(validationSchema)}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <div className='flex flex-col mb-10'>
              <div className='my-10'>
                <h1 className='text-2xl font-bold'>انتخاب عنوان و دسته بندی</h1>
                <p>
                  اگر اکنون عنوان خوبی را ندارید، اشکالی ندارد بعدا میتوانید آن
                  را تغییر دهید.
                </p>
              </div>
              <div className='flex flex-col gap-4 mb-4'>
                <Field
                  as={TextInput}
                  name={FieldName.NAME}
                  label='عنوان آموزش'
                  errorMessage={
                    touched[FieldName.NAME] && errors[FieldName.NAME]
                  }
                  placeholder='مثال، آموزش مبانی برنامه نویسی'
                />
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Select
                    label='دسته بندی آموزش'
                    options={(categories.data || []).map((cat) => ({
                      name: cat.name,
                      code: cat.slug,
                      id: cat.id,
                    }))}
                    onSelect={(option) =>
                      setFieldValue(FieldName.CATEGORY, option)
                    }
                    errorMessage={
                      touched[FieldName.CATEGORY] &&
                      errors[FieldName.CATEGORY]?.code
                    }
                    wrapperClassName='min-w-full'
                  />
                  <Field
                    as={TextInput}
                    name={FieldName.DURATION}
                    errorMessage={
                      touched[FieldName.DURATION] && errors[FieldName.DURATION]
                    }
                    label='مدت زمان تقریبی (برحسب ساعت)'
                  />
                </div>
              </div>
            </div>
            <Button
              variant='primary'
              className='py-2 px-6 mr-auto w-full sm:w-auto'
              loading={state.loading}
              disabled={state.disabled}
            >
              تایید و ثبت آموزش
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Step1View
