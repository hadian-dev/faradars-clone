import React from 'react'

type TVariant = 'primary' | 'error' | 'success'
type Props = {
  variant?: TVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className = '', variant, ...props }: Props) => {
  const variants = {
    primary:
      'bg-sky-500 dark:bg-sky-600 border-sky-600 dark:border-sky-500 hover:bg-sky-600 hover:dark:bg-sky-700 focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    success:
      'bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-500 hover:bg-green-600 hover:dark:bg-green-700 focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
    error:
      'bg-red-500 dark:bg-red-600 border-red-600 dark:border-red-500 hover:bg-red-600 hover:dark:bg-red-700 focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1 focus:dark:ring-offset-black transition-colors',
  }

  const color = variant ? variants[variant] : ''

  return (
    <button
      className={`rounded border w-48 px-4 py-2 focus:outline-none ${color} ${className}`}
      {...props}
    />
  )
}
