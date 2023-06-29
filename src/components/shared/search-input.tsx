import React from 'react'
import { IoSearch } from 'react-icons/io5'

type Props = {
  label?: string
  wrapperClassName?: string
  className?: string
  ltrDirection?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const SearchInput = ({
  label,
  ltrDirection,
  wrapperClassName = '',
  className = '',
  ...props
}: Props) => {
  return (
    <label className={`relative block w-full ${wrapperClassName}`}>
      <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
        <IoSearch className='h-5 w-5 fill-gray-400 dark:fill-gray-600' />
      </span>
      <input
        className={`p-2 pr-9 border rounded w-full bg-white dark:bg-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-sky-500 ${
          ltrDirection ? 'ltr_direction' : ''
        } ${className}`}
        {...props}
      />
    </label>
  )
}
