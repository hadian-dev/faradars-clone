'use client'

import React from 'react'
import { Checkbox, Collapse, Radio, TextInput } from '@/components/shared'
import { useAppSelector } from '@/redux/store'
import { useRouter, useSearchParams } from 'next/navigation'
import { PATHS, SEARCH_PARAMS } from '@/constants'

const FilterPanel = () => {
  const params = useSearchParams()
  const { push } = useRouter()
  const categoryList = useAppSelector((state) => state.category.items)

  const selectedPrice = params.get(SEARCH_PARAMS.PRICE)
  const selectedCategories = params.get(SEARCH_PARAMS.CATEGORIES)

  const onChange = () => {}

  const onChangeCategory = (id: number) => () => {
    const newParams = new URLSearchParams(params as any)

    if (selectedCategories && selectedCategories.includes(String(id))) {
      newParams.delete(SEARCH_PARAMS.CATEGORIES)
    } else {
      newParams.append(SEARCH_PARAMS.CATEGORIES, String(id))
    }

    push(PATHS.courses.as(newParams.toString()))
  }

  const onChangePrice = (code: 'free' | 'noFree' | 'all') => () => {
    console.log({ selectedPrice, code })
    if (selectedPrice && selectedPrice === code) return

    const newParams = new URLSearchParams(params as any)

    if (code === 'all') {
      newParams.delete(SEARCH_PARAMS.PRICE)
    } else {
      newParams.set(SEARCH_PARAMS.PRICE, code)
    }

    push(PATHS.courses.as(newParams.toString()))
  }

  return (
    <aside className='w-1/5 min-w-[230px]'>
      <div className='sticky top-[88px] flex flex-col gap-3'>
        <Collapse isOpen label='جستجو براساس آموزش'>
          <TextInput onChange={onChange} placeholder='جستجوی عنوان آموزش' />
        </Collapse>
        <Collapse isOpen label='جستجو براساس نام مدرس'>
          <TextInput onChange={onChange} placeholder='جستجوی نام مدرس' />
        </Collapse>
        {!!categoryList.length && (
          <Collapse isOpen label='دسته بندی'>
            {categoryList.map((cat) => (
              <Checkbox
                key={cat.id}
                label={cat.name}
                onChange={onChangeCategory(cat.id)}
                checked={selectedCategories?.includes(String(cat.id))}
              />
            ))}
          </Collapse>
        )}
        <Collapse isOpen label='هزینه آموزش'>
          <Radio
            name='price'
            label='همه'
            onClick={onChangePrice('all')}
            checked={!selectedPrice}
          />
          <Radio
            name='price'
            label='رایگان'
            onClick={onChangePrice('free')}
            checked={selectedPrice === 'free'}
          />
          <Radio
            name='price'
            label='غیر رایگان'
            onClick={onChangePrice('noFree')}
            checked={selectedPrice === 'noFree'}
          />
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
