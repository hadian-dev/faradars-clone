import React from 'react'
import { Collapse, Radio, TextInput } from '@/components/shared'

const FilterPanel = () => {
  const onChange = () => {}

  return (
    <aside className='w-1/5'>
      <div className='sticky top-[88px] flex flex-col gap-3'>
        <Collapse isOpen label='جستجو براساس آموزش'>
          <TextInput onChange={onChange} placeholder='جستجوی عنوان آموزش' />
        </Collapse>
        <Collapse isOpen label='جستجو براساس نام مدرس'>
          <TextInput onChange={onChange} placeholder='جستجوی نام مدرس' />
        </Collapse>
        <Collapse isOpen label='هزینه آموزش'>
          <Radio onChange={onChange} name='price' label='همه' checked />
          <Radio onChange={onChange} name='price' label='رایگان' />
          <Radio onChange={onChange} name='price' label='غیر رایگان' />
        </Collapse>
        <Collapse isOpen label='وضعیت انتشار'>
          <Radio onChange={onChange} name='publish' label='همه' checked />
          <Radio onChange={onChange} name='publish' label='منتشر شده' />
          <Radio onChange={onChange} name='publish' label='در حال انتشار' />
        </Collapse>
        <Collapse isOpen label='نوع آموزش'>
          <Radio onChange={onChange} name='courseType' label='همه' checked />
          <Radio
            onChange={onChange}
            name='courseType'
            label='آموزش های ویدئویی'
          />
          <Radio onChange={onChange} name='courseType' label='وبینارها' />
        </Collapse>
        <Collapse isOpen label='بر اساس وضعیت'>
          <Radio onChange={onChange} name='library' label='همه' checked />
          <Radio
            onChange={onChange}
            name='library'
            label='آموزش هایی که تهیه نکرده ام'
          />
          <Radio
            onChange={onChange}
            name='library'
            label='آموزش هایی که تهیه کرده ام'
          />
        </Collapse>
      </div>
    </aside>
  )
}

export default FilterPanel
