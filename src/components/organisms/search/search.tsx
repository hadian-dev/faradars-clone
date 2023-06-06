import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { PATHS, SEARCH_PARAMS } from '@/constants'
import { SearchIcon } from '@/shared'
import { useRouter, useSearchParams } from 'next/navigation'

const POPULAR_SEARCH = [
  { name: 'پایتون', code: 'python' },
  { name: 'اکسل', code: 'excel' },
  { name: 'حسابداری', code: 'calculating' },
  { name: 'فتوشاپ', code: 'photo' },
  { name: 'زبان انگلیسی', code: 'english' },
]

export function Search() {
  const params = useSearchParams()
  const { push } = useRouter()

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) return

    const value = params.get(SEARCH_PARAMS.term) || ''
    inputRef.current.value = value
  }, [params])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputRef.current) return
    if (inputRef.current.value === params.get(SEARCH_PARAMS.term)) return

    inputRef.current.blur()

    if (inputRef.current.value) {
      const searchParams = new URLSearchParams()
      searchParams.append(SEARCH_PARAMS.term, inputRef.current.value)
      push(PATHS.courses.as(`?${searchParams.toString()}`))
    } else {
      const searchParams = new URLSearchParams(params.toString())
      searchParams.delete(SEARCH_PARAMS.term)
      push(PATHS.courses.as(searchParams.toString()))
    }

    if (containerRef.current) {
      containerRef.current.style.display = ''
      containerRef.current.setAttribute('data-visible', 'false')
    }
  }

  const onFocusInput = () => {
    if (!containerRef.current) return

    containerRef.current.style.display = 'block'
  }

  const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (!containerRef.current) return

      const visibleAttr = containerRef.current.getAttribute('data-visible')

      if (visibleAttr === 'true') {
        containerRef.current.setAttribute('data-visible', 'false')
        e.target.focus()
        return
      }

      containerRef.current.style.display = ''
      containerRef.current.setAttribute('data-visible', 'false')
    }, 100)
  }

  const onClickContainer = () => {
    console.log('click')
    if (!containerRef.current) return

    containerRef.current.setAttribute('data-visible', 'true')
  }

  const onClickOption = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation()

    if (containerRef.current) {
      containerRef.current.style.display = ''
      containerRef.current.setAttribute('data-visible', 'false')
    }
  }

  return (
    <div className='relative w-full'>
      <label className='relative block w-full'>
        <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
          <SearchIcon className='h-5 w-5 fill-slate-400' />
        </span>
        <form onSubmit={onSubmit}>
          <input
            className='input w-full pr-9 dark:bg-gray-900 border dark:border-gray-600'
            placeholder='جستجوی آموزش ...'
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            ref={inputRef}
          />
        </form>
      </label>
      <div
        ref={containerRef}
        onClick={onClickContainer}
        data-visible='false'
        id='search_container'
        className='absolute hidden mt-1 z-10 rounded-md p-4 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 w-full shadow-lg shadow-gray-500 dark:shadow-gray-900'
      >
        <h1>جستجو های پرطرفدار</h1>
        <ul className='flex gap-2 flex-wrap mt-4'>
          {POPULAR_SEARCH.map((item) => (
            <li key={item.name} onClick={onClickOption} className='mb-1'>
              <Link
                href={{
                  pathname: PATHS.courses.url,
                  query: { [SEARCH_PARAMS.term]: item.name },
                }}
                className='py-1 px-3 cursor-pointer rounded border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 whitespace-nowrap'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
