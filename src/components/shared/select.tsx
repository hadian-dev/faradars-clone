'use client'

import React, { useState } from 'react'
import { Dropdown } from './dropdown'

type OptionType =
  | string
  | number
  | {
      name: string
      code: string
    }

type Props<TOption> = {
  options: TOption[]
  onSelect: (option: TOption) => void
  labelClassName?: string
  wrapperClassName?: string
  defaultValue?: TOption
  showEmptyOption?: boolean
  errorMessage?: string
  label?: string
}

export function Select<TOption extends OptionType>({
  wrapperClassName,
  labelClassName,
  defaultValue,
  showEmptyOption,
  errorMessage,
  label,
  options,
  onSelect,
}: Props<TOption>) {
  const [selected, setSelected] = useState<TOption | undefined>(defaultValue)

  const onSelectOption = (opt: TOption) => {
    setSelected(opt)
    onSelect(opt)
  }

  return (
    <div className={`w-full`}>
      <span
        className={`text-sm ${
          errorMessage
            ? 'text-red-600 dark:text-red-500'
            : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        {label}
      </span>
      <Dropdown
        label={
          typeof selected === 'object' ? selected?.name : `${selected || ''}`
        }
        labelClassName={`bg-white border border-gray-300 ${labelClassName}`}
        wrapperClassName={wrapperClassName}
        errorMessage={errorMessage}
        toggleOnClick
      >
        <ul className='bg-gray-50 dark:bg-gray-800 max-h-[400px] overflow-y-auto'>
          {showEmptyOption && (
            <li
              key='undefined'
              onClick={() => onSelectOption(undefined as any)}
              className={`text-sm p-2 h-[33px] cursor-pointer border-t border-gray-300 dark:border-gray-600 hover:bg-gray-200 hover:dark:bg-gray-700 ${
                selected === undefined ? 'bg-gray-500/50' : ''
              }`}
            />
          )}
          {options.map((opt, i) => (
            <li
              style={i === 0 ? { border: '' } : {}}
              key={typeof opt === 'object' ? opt.code : opt}
              onClick={() => onSelectOption(opt)}
              className={`text-xs p-2 cursor-pointer border-t border-gray-300 dark:border-gray-600 hover:bg-gray-200 hover:dark:bg-gray-700 ${
                (typeof opt === 'object' ? opt.code : opt) ===
                (typeof selected === 'object' ? selected?.name : selected)
                  ? 'bg-gray-500/50'
                  : ''
              }`}
            >
              {typeof opt === 'object' ? opt.name : opt}
            </li>
          ))}
        </ul>
      </Dropdown>
      {errorMessage && (
        <span className='text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </span>
      )}
    </div>
  )
}
