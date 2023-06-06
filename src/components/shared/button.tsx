import React from 'react'

type TVariant =
  | 'primary'
  | 'error'
  | 'success'
  | 'primary-outline'
  | 'success-outline'
  | 'error-outline'

type Props = {
  variant?: TVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className = '', variant, ...props }: Props) => {
  const variants = {
    primary:
      'border bg-sky-500 dark:bg-sky-600 border-sky-600 dark:border-sky-500 hover:bg-sky-600 hover:dark:bg-sky-700 focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    success:
      'border bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-500 hover:bg-green-600 hover:dark:bg-green-700 focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    error:
      'border bg-red-500 dark:bg-red-600 border-red-600 dark:border-red-500 hover:bg-red-600 hover:dark:bg-red-700 focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    'primary-outline':
      'border border-sky-500 text-sky-500 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-600/20 hover:dark:bg-sky-400/20 focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    'success-outline':
      'border border-green-500 text-green-500 dark:text-green-400 dark:border-green-400 hover:bg-green-600/20 hover:dark:bg-green-400/20 focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    'error-outline':
      'border border-red-500 text-red-500 dark:text-red-400 dark:border-red-400 hover:bg-red-600/20 hover:dark:bg-red-400/20 focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
  }

  const color = variant ? variants[variant] : ''

  return (
    <button
      className={`rounded w-auto text-center whitespace-nowrap p-1 focus:outline-none ${color} disabled:bg-gray-400 disabled:dark:bg-gray-700 disabled:text-gray-800 disabled:dark:text-gray-400 disabled:border-gray-600 disabled:dark:border-gray-500 ${className}`}
      {...props}
    />
  )
}
