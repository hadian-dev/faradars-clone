import React from 'react'

type Props = {
  label?: string
  wrapperClassName?: string
  className?: string
  errorMessage?: string
  ltrDirection?: boolean
  innerRef?: React.LegacyRef<HTMLInputElement>
} & React.InputHTMLAttributes<HTMLInputElement>

export function TextInput({
  label,
  innerRef,
  ltrDirection,
  wrapperClassName = '',
  className = '',
  errorMessage,
  ...props
}: Props) {
  return (
    <label className={`block w-full ${wrapperClassName}`}>
      {label && (
        <span
          className={`block text-sm ${
            errorMessage
              ? 'text-red-600 dark:text-red-500'
              : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          {label}
        </span>
      )}
      <input
        type='text'
        ref={innerRef}
        className={`input w-full ${className} ${
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
