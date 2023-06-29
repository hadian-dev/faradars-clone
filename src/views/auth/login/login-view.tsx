'use client'

import { Button, TextInput } from '@/components/shared'
import { PATHS } from '@/constants'
import { Field, Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { object, string, TypeOf } from 'zod'

const required = 'مقدار ایمیل ضروری است'
const invalidEmail = 'ایمیل وارد شده نامعتبر است'

export const loginSchema = object({
  email: string({ required_error: required }).email({ message: invalidEmail }),
})

export type TLoginInput = TypeOf<typeof loginSchema>

const initialValue: TLoginInput = {
  email: 'hadiyandev@gmail.com',
}

const LoginView = () => {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (values: TLoginInput) => {
    if (loading) return

    try {
      setLoading(true)

      const res = await signIn('email', {
        email: values.email,
        callbackUrl: PATHS.account.url,
      })

      if (res?.error) {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      toast.error('مشکلی در ارسال ایمیل به وجود آمده است')
      console.log(error)
    }
  }

  return (
    <div className='mb-16 border border-gray-300 dark:border-gray-700 rounded-lg p-6 w-full max-w-[450px] bg-gray-100 dark:bg-gray-900'>
      <h1 className='text-2xl text-center mb-8'>ورود / ثبت نام</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(loginSchema)}
      >
        {({ errors }) => (
          <Form className=''>
            <Field
              as={TextInput}
              name='email'
              label='ایمیل'
              placeholder='example@gmail.com'
              wrapperClassName='mb-6'
              ltrDirection
              errorMessage={errors.email}
            />
            <Button
              variant='success'
              type='submit'
              className='w-full text-lg'
              loading={loading}
              disabled={loading}
            >
              ادامه
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginView
