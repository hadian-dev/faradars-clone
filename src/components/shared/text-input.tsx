import React from 'react'

type Props = {
  label?: string
  wrapperClassName?: string
  className?: string
  errorMessage?: string
  ltrDirection?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export function TextInput({
  label,
  ltrDirection,
  wrapperClassName = '',
  className = '',
  errorMessage,
  ...props
}: Props) {
  return (
    <label className={`block w-full ${wrapperClassName}`}>
      {label && (
        <span className='text-sm text-gray-700 dark:text-gray-300'>
          {label}
        </span>
      )}
      <input
        type='text'
        className={`p-2 border rounded w-full bg-white dark:bg-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-sky-500 ${className} ${
          errorMessage
            ? 'border-red-600 dark:border-red-500'
            : 'border-gray-300 dark:border-zinc-700'
        } ${ltrDirection ? 'ltr_direction' : ''}`}
        {...props}
      />
      {errorMessage && (
        <span className='text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </span>
      )}
    </label>
  )
}
