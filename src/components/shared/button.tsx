'use client'

import React from 'react'
import { Spinner } from './spinner'

type TVariant =
  | 'primary'
  | 'error'
  | 'success'
  | 'light'
  | 'warning'
  | 'primary-outline'
  | 'success-outline'
  | 'error-outline'

type Props = {
  variant?: TVariant
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className = '',
  variant,
  loading,
  children,
  ...props
}: Props) => {
  const variants = {
    primary: 'primary-btn',
    success: 'success-btn',
    error:
      'border bg-red-500 dark:bg-red-600 border-red-600 dark:border-red-500 hover:bg-red-600 hover:dark:bg-red-700 focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    warning:
      'border bg-yellow-500 dark:bg-yellow-600 border-yellow-600 dark:border-yellow-500 hover:bg-yellow-600 hover:dark:bg-yellow-700 focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    light:
      'border bg-gray-900 dark:bg-gray-100 text-white dark:text-black border-gray-800 dark:border-gray-300 hover:bg-gray-800 hover:dark:bg-white focus:ring-2 focus:ring-gray-600/50 focus:dark:ring-gray-200/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    'primary-outline':
      'border border-sky-500 text-sky-500 dark:text-sky-400 dark:border-sky-400 hover:bg-sky-600/20 hover:dark:bg-sky-400/20 focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    'success-outline':
      'border border-green-500 text-green-500 dark:text-green-400 dark:border-green-400 hover:bg-green-600/20 hover:dark:bg-green-400/20 focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    'error-outline':
      'border border-red-500 text-red-500 dark:text-red-400 dark:border-red-400 hover:bg-red-600/20 hover:dark:bg-red-400/20 focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
  }

  const color = variant ? variants[variant] : ''

  return (
    <button className={`button ${color} ${className}`} {...props}>
      {children} {loading && <Spinner loading className='max-w-5 max-h-5' />}
    </button>
  )
}
