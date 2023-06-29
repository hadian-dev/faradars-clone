'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

type Props = {
  label?: string
  labelClassName?: string
  containerClassName?: string
  wrapperClassName?: string
  children: ReactNode
  toggleOnClick?: boolean
  errorMessage?: string
  id?: string
}

export const Dropdown = ({
  label = 'انتخاب',
  children,
  errorMessage,
  id = 'dropdown_wrapper',
  wrapperClassName = '',
  labelClassName = '',
  containerClassName = '',
  toggleOnClick,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement)) return

      if (!event.target.closest(`#${id}`)) {
        setIsOpen((prev) => !prev)
        if (dropdownRef.current) dropdownRef.current.style.display = ''
      }

      if (toggleOnClick && event.target.closest('#dropdown_container')) {
        setIsOpen((prev) => !prev)
        if (dropdownRef.current) dropdownRef.current.style.display = ''
      }
    }

    window.addEventListener('click', onClick)

    return () => window.removeEventListener('click', onClick)
  }, [isOpen, id, toggleOnClick])

  const dropdownToggle = () => {
    setIsOpen((prev) => !prev)

    if (dropdownRef.current) {
      dropdownRef.current.style.display = isOpen ? '' : 'block'
    }
  }

  return (
    <div id={id} className={`relative h-[42px] w-fit ${wrapperClassName}`}>
      <button
        onClick={dropdownToggle}
        className={`w-full h-full text-black rounded bg-gray-200 text-sm py-2 px-4 text-center inline-flex items-center justify-between gap-2 focus:ring-sky-400 focus:ring-2 focus:outline-none ${labelClassName} ${
          errorMessage ? 'border border-red-600 dark:border-red-500' : ''
        }`}
        type='button'
      >
        <span className='whitespace-nowrap'>{label}</span>
        <IoIosArrowDown />
      </button>
      <div
        ref={dropdownRef}
        id='dropdown_container'
        className={`z-20 hidden absolute w-max min-w-full top-full overflow-hidden mt-0.5 bg-white rounded border border-gray-300 dark:border-gray-600 shadow dark:bg-gray-700 ${containerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
