'use client'

import React, { useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
  label?: string
  className?: string
  containerClassName?: string
  isOpen?: boolean
  innerRef?: React.RefObject<HTMLDialogElement>
} & React.DialogHTMLAttributes<HTMLDialogElement>

export const Dialog = ({
  label = '',
  className = '',
  containerClassName = '',
  innerRef,
  isOpen,
  children,
  ...props
}: Props) => {
  let dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal()
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  const onClose = () => {
    const ref = innerRef || dialogRef
    ref.current?.close()
  }

  const onClickBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    const { target, clientX, clientY } = e
    const ref = innerRef || dialogRef

    if (!(target instanceof HTMLElement)) return

    const { left, right, top, bottom } = target.getBoundingClientRect()

    if (
      left > clientX ||
      right < clientX ||
      top > clientY ||
      bottom < clientY
    ) {
      ref.current?.close()
    }
  }

  return (
    <dialog
      ref={innerRef || dialogRef}
      onClick={onClickBackdrop}
      className={`rounded-lg p-0 dark:text-gray-200 bg-base-100 dark:bg-zinc-800 outline-none border border-gray-300 dark:border-gray-700 shadow-xl shadow-zinc-500 dark:shadow-zinc-700 backdrop:bg-gray-700/40 backdrop:dark:bg-zinc-400/50 ${className}`}
      {...props}
    >
      <header className='border-b border-gray-300 dark:border-gray-700 p-2 flex gap-3 justify-between items-center'>
        <h1>{label}</h1>
        <button
          value='close'
          className='btn btn-square btn-ghost'
          formMethod='dialog'
          onClick={onClose}
        >
          <FaTimes />
        </button>
      </header>
      <main className={`p-2 ${containerClassName}`}>{children}</main>
    </dialog>
  )
}
