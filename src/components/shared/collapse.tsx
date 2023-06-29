'use client'

import React, { useRef, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

type Props = {
  isOpen?: boolean
  children?: React.ReactNode
  label?: string
  wrapperClassName?: string
  titleClassName?: string
  containerClassName?: string
}

export const Collapse = ({
  wrapperClassName = '',
  titleClassName = '',
  containerClassName = '',
  isOpen = false,
  label,
  children,
}: Props) => {
  const [open, setOpen] = useState(isOpen)
  const ref = useRef<HTMLDivElement>(null)

  const buttonClasses = open
    ? 'border-zinc-300 dark:border-zinc-700'
    : 'border-transparent'

  return (
    <div
      className={`border rounded-lg border-zinc-300 dark:border-zinc-700 w-full h-fit transition-all ${wrapperClassName}`}
    >
      <button
        title={label}
        className={`w-full flex justify-between items-center p-2 text-right border-b transition-all duration-500 ${buttonClasses} ${titleClassName}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <IoIosArrowUp
          className={
            open ? 'transition-transform' : 'rotate-180 transition-transform'
          }
        />
      </button>
      <div
        style={
          open
            ? {
                height: !ref.current
                  ? '100%'
                  : `${(ref.current?.offsetHeight || 0) + 16}px`,
                padding: '8px',
              }
            : {
                height: '0',
                paddingTop: '0',
                paddingBottom: '0',
              }
        }
        className={`overflow-hidden px-2 transition-all duration-500 ${containerClassName}`}
      >
        <div ref={ref} className='transition-all duration-500'>
          {children}
        </div>
      </div>
    </div>
  )
}
