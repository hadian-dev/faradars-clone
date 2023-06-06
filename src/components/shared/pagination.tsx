import { useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

let prevTotalPage = 0

type Props = {
  totalItems?: number
  page: number
  setPage: (page: number) => void
  className?: string
}

export const Pagination = ({
  totalItems,
  page,
  setPage,
  className = '',
}: Props) => {
  const params = useSearchParams()
  const [totalPage, setTotalPage] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const pages = Array.from({ length: totalPage }, (_, i) => (i + 1).toString())

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = params.get('page') || '1'
    }
  }, [params])

  useEffect(() => {
    const total = Math.ceil(totalItems ? totalItems : prevTotalPage)
    prevTotalPage = total
    setTotalPage(total)
  }, [totalItems])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const value = inputRef.current?.value

    if (value && !Number.isNaN(+value)) {
      setPage(+value)
    }
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          ref={inputRef}
          style={{ direction: 'ltr' }}
          className='w-8 h-8 text-black text-center rounded-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-sky-500'
        />
      </form>
      <div className='flex gap-1 p-2'>
        <PageButton setPage={() => setPage(page - 1)} disabled={page - 1 <= 0}>
          <FiArrowRight />
        </PageButton>
        {pages.slice(Math.max(page - 3, 0), page).map((index) => (
          <PageButton key={index} index={+index} page={page} setPage={setPage}>
            {index}
          </PageButton>
        ))}
        {pages.slice(page, Math.min(totalPage, page + 4)).map((index) => (
          <PageButton key={index} index={+index} page={page} setPage={setPage}>
            {index}
          </PageButton>
        ))}
        {page <= pages.length - 3 && (
          <PageButton key={'...'} index={-1} page={page} setPage={() => null}>
            ...
          </PageButton>
        )}
        {page <= pages.length - 3 && (
          <PageButton
            key={pages.length - 1}
            index={pages.length}
            page={page}
            setPage={setPage}
          >
            {pages.length - 1}
          </PageButton>
        )}
        <PageButton
          setPage={() => setPage(page + 1)}
          disabled={page + 1 > totalPage}
        >
          <FiArrowLeft />
        </PageButton>
      </div>
    </div>
  )
}

type ButtonProps = {
  index?: number
  page?: number
  setPage: (page: number) => void
  children: React.ReactNode
  disabled?: boolean
}

function PageButton({
  disabled,
  index = -1,
  page,
  setPage,
  children,
}: ButtonProps) {
  const onClick = () => setPage(index)

  return (
    <button
      style={
        page === index
          ? { backgroundColor: '#0283da', borderColor: '#0099ff' }
          : {}
      }
      className='p-1 w-8 h-8 flex justify-center items-center rounded-sm border border-gray-300 dark:border-gray-600 text-black dark:text-white disabled:bg-zinc-700 disabled:text-zinc-400'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
