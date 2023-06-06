import { Button, Editor, TextInput } from '@/components/shared'
import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { TDescription } from './initial-values'

type Props = {
  initial: TDescription
  onRemove: (index: number) => void
  onSave: (desc: TDescription) => void
}

const DescriptionItem = ({ initial, onSave, onRemove }: Props) => {
  const [desc, setDesc] = useState(initial)

  const onClickRemove = () => onRemove(desc.index)
  const onClickSave = () => {
    const nextDesc = { ...desc, saved: true }

    onSave(nextDesc)
    setDesc(nextDesc)
  }

  const isSaved = () => {
    return JSON.stringify(desc) === JSON.stringify(initial)
  }

  const onChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc({ ...desc, label: e.target.value, saved: false })
  }

  const onChangeContent = (content: string) => {
    setDesc({ ...desc, content, saved: false })
  }

  return (
    <div className='p-3 mt-3 border border-gray-300 dark:border-gray-600 rounded'>
      <TextInput
        value={desc.label}
        placeholder='نام برچسب'
        className='border-0 rounded-none border-b'
        style={desc.label ? {} : { borderColor: 'red' }}
        onChange={onChangeLabel}
      />
      <Editor value={desc.content} onChange={onChangeContent} />
      {!desc.label && (
        <p className='text-sm text-red-500'>نام برچسب توضیحات خالی است</p>
      )}
      <div className='flex justify-between mt-2'>
        <div className='flex gap-2 items-center'>
          <Button
            onClick={onClickSave}
            disabled={isSaved()}
            variant='success-outline'
            type='button'
            className='border border-lime-300 dark:border-lime-600'
          >
            ثبت تغییرات
          </Button>
          {!desc.saved && (
            <p className='text-sm text-green-500'>تغییرات خود را ذخیره کنید</p>
          )}
        </div>
        <Button
          type='button'
          variant='error-outline'
          className='min-w-[34px]'
          title='حذف این توضیح'
          onClick={onClickRemove}
          // disabled={!isValidDesc()}
        >
          <FaRegTrashAlt className='w-5 h-5' />
        </Button>
      </div>
    </div>
  )
}

export default DescriptionItem
