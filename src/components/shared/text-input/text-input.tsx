import React from 'react'

type Props = {
  label?: string
  wrapperClassName?: string
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function TextInput({
  label,
  wrapperClassName = '',
  className = '',
  ...props
}: Props) {
  return (
    <label className={`block ${wrapperClassName}`}>
      {label && <span>{label}</span>}
      <input
        type='text'
        className={`p-2 rounded w-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-300 dark:text-black focus:outline-none focus:ring-2 focus:ring-sky-500 ${className}`}
        {...props}
      />
    </label>
  )
}
