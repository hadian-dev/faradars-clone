import React from 'react'
import { FormikProps } from 'formik'
import { Field, Form } from 'formik'
import { Language } from '@prisma/client'
import { Button, Select, TextInput } from '@/components/shared'
import {
  CreateCourseInputType,
  FieldName,
  TDescription,
} from './initial-values'
import { normalizeString } from '@/utils'
import DescriptionsList from './description-list'

const options = [
  { code: 'FA', name: 'فارسی' },
  { code: 'EN', name: 'انگلیسی' },
]

const CreateForm = (props: FormikProps<CreateCourseInputType>) => {
  const { values, setFieldValue } = props

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(FieldName.NAME, e.target.value)
    setFieldValue(FieldName.SLUG, normalizeString(e.target.value))
  }
  const onChangeSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(FieldName.SLUG, normalizeString(e.target.value))
  }
  const onSelectLanguage = (option: (typeof options)[0]) => {
    setFieldValue(FieldName.LANGUAGE, option?.code || Language.FA)
  }
  const onChangeDescriptionList = (list: TDescription[]) => {
    setFieldValue(FieldName.DESCRIPTION_LIST, list)
  }

  return (
    <Form>
      <div className='flex gap-6'>
        <TextInput
          label='نام'
          wrapperClassName='mb-2'
          value={values.name}
          onChange={onChangeName}
        />
        <TextInput
          label='کد'
          wrapperClassName='mb-2'
          value={values.slug}
          title='کد آموزش را به انگلیسی و بدون علایم خاص وارد نمایید'
          errorMessage={
            /[آ-ی]/.test(values.slug) ? 'شامل حروف نامعتبر میباشد' : ''
          }
          onChange={onChangeSlug}
        />
      </div>
      <div className='flex gap-6 mb-2'>
        <div className='flex gap-2 w-full items-end'>
          <Field as={TextInput} name={FieldName.DURATION} label='زمان دوره' />
          <Select
            options={options}
            defaultValue={{ code: Language.FA, name: 'فارسی' }}
            onSelect={onSelectLanguage}
            labelClassName='min-h-[41px]'
          />
        </div>
        <div className='flex gap-2 w-full'>
          <Field
            as={TextInput}
            type='number'
            ltrDirection
            name={FieldName.PRICE}
            label='قیمت دوره'
          />
          <Field
            as={TextInput}
            type='number'
            ltrDirection
            name={FieldName.ORIGINAL_PRICE}
            label='قیمت اصلی'
          />
        </div>
      </div>
      <Field
        as={TextInput}
        className='mb-2'
        ltrDirection
        name={FieldName.IMAGE_COVER}
        label='عکس'
      />
      <Field
        as={TextInput}
        className='mb-2'
        ltrDirection
        name={FieldName.VIDEO_COVER}
        label='ویدیو'
      />

      <DescriptionsList
        list={values.descriptionList}
        setList={onChangeDescriptionList}
      />

      <div className='absolute -bottom-4'>
        <Button variant='success' className='px-5 py-2' type='submit'>
          ذخیره آموزش
        </Button>
      </div>
    </Form>
  )
}

export default CreateForm
