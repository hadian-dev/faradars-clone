'use client'

import { Button, TextInput } from '@/components/shared'
import { Field, Form, Formik } from 'formik'
import React from 'react'

enum FieldName {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
  GRADE = 'grade',
  DEGREE = 'degree',
  FIELD = 'field',
  UNIVERSITY = 'university',
}

type TFormState = {
  [FieldName.NAME]: string
  [FieldName.EMAIL]: string
  [FieldName.PHONE]: string
  [FieldName.GRADE]: string
  [FieldName.DEGREE]: string
  [FieldName.FIELD]: string
  [FieldName.UNIVERSITY]: string
}

const BecomeTeacherView = () => {
  const initialValues: TFormState = {
    [FieldName.NAME]: '',
    [FieldName.EMAIL]: '',
    [FieldName.PHONE]: '',
    [FieldName.GRADE]: '',
    [FieldName.DEGREE]: '',
    [FieldName.FIELD]: '',
    [FieldName.UNIVERSITY]: '',
  }

  const onSubmit = (values: TFormState) => {
    console.log(values)
  }

  return (
    <div className='max-w-[1000px] m-auto p-4 md:p-8'>
      <h1 className='text-4xl font-bold text-center mt-12'>مدرس شوید</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({}) => (
          <Form>
            <div className='my-10 '>
              <h2 className='text-xl font-bold mb-1'>اطلاعات مدرس</h2>
              <p className='mb-1'>
                لطفا اطلاعات این بخش را، در مواردی که امکان تایپ فارسی وجود
                دارد؛ تا حد امکان با حروف فارسی وارد کنید.
              </p>
              <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <Field
                  as={TextInput}
                  name={FieldName.NAME}
                  label='نام و نام خانوادگی'
                  wrapperClassName='mt-2 md:mt-4'
                />
                <Field
                  as={TextInput}
                  name={FieldName.EMAIL}
                  ltrDirection
                  label='آدرس ایمیل'
                  wrapperClassName='mt-2 md:mt-4'
                />
                <Field
                  as={TextInput}
                  name={FieldName.PHONE}
                  ltrDirection
                  label='تلفن همراه'
                  wrapperClassName='mt-2 md:mt-4'
                />
                <Field
                  as={TextInput}
                  name={FieldName.GRADE}
                  label='آخرین وضعیت تحصیلی'
                  wrapperClassName='mt-2 md:mt-4'
                />
                <Field
                  as={TextInput}
                  name={FieldName.FIELD}
                  label='رشته تحصیلی'
                  wrapperClassName='mt-2 md:mt-4'
                />
                <Field
                  as={TextInput}
                  name={FieldName.UNIVERSITY}
                  label='دانشگاه محل تحصیل'
                  wrapperClassName='mt-2 md:mt-4'
                />
              </div>
            </div>
            {/* <div className='mb-10'>
              <h2 className='text-xl font-bold mb-1'>
                وابستگی سازمانی، دانشگاهی، صنعتی یا شرکتی
              </h2>
              <p className='mb-3'>
                لطفا وابستگی سازمانی، دانشگاهی، صنعتی یا شرکتی خود را (هیأت
                علمی، متخصص در صنعت، فعال در بخش خصوصی شرکت‌ها، دانشجو، فریلنسر
                و...) وارد کنید (حداکثر دو مورد). در صوت نداشتن وابستگی سازمانی
                فعلی، می‌توانید این بخش را خالی بگذارید.
              </p>
              <div className='flex gap-2 border-b border-gray-600 pb-4 sm:border-0 sm:pb-0'>
                <div>
                  <span className='text-sm text-gray-700 dark:text-gray-300'>
                    ردیف
                  </span>
                  <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
                    1
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 w-full'>
                  <TextInput label='نام سازمان، شرکت ...' />
                  <TextInput label='موقعیت و نوع همکاری' />
                </div>
              </div>
              <div className='flex mt-2 sm:gap-2'>
                <div className='ml-2 mt-6 sm:ml-0 sm:mt-0'>
                  <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
                    2
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 w-full'>
                  <div className='w-full'>
                    <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
                      نام سازمان، شرکت ...
                    </span>
                    <TextInput />
                  </div>
                  <div className='w-full'>
                    <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
                      موقعیت و نوع همکاری
                    </span>
                    <TextInput />
                  </div>
                </div>
              </div>
            </div> */}

            <Button variant='primary' type='submit' className='py-2 px-8'>
              تایید و ثبت اطلاعات
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default BecomeTeacherView
