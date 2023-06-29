import React from 'react'

type Props = {
  label?: string
  wrapperClassName?: string
  errorMessage?: string
  className?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({
  label,
  errorMessage,
  wrapperClassName = '',
  className = '',
  ...props
}: Props) {
  return (
    <label className={`block ${wrapperClassName}`}>
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
      <textarea
        rows={4}
        className={`textarea textarea-bordered w-full ${className}`}
        {...props}
      />
    </label>
  )
}
