import React, { useState } from 'react'
import { Dropdown } from './dropdown'

type TOption = {
  name: string
  code: string
}

type Props = {
  options: TOption[]
  onSelect: (option: TOption) => void
  labelClassName?: string
  defaultValue?: TOption
  showEmptyOption?: boolean
}

export const Select = ({
  labelClassName,
  defaultValue,
  showEmptyOption,
  options,
  onSelect,
}: Props) => {
  const [selected, setSelected] = useState<TOption | undefined>(defaultValue)

  const onSelectOption = (opt: TOption) => {
    setSelected(opt)
    onSelect(opt)
  }

  return (
    <Dropdown
      label={selected?.name}
      labelClassName={labelClassName}
      toggleOnClick
    >
      <ul className='bg-gray-100 dark:bg-gray-800 max-h-[400px] overflow-y-auto'>
        {showEmptyOption && (
          <li
            key='undefined'
            onClick={() => onSelectOption(undefined as any)}
            className={`text-sm p-2 h-[33px] cursor-pointer border-t border-gray-300 dark:border-gray-600 hover:bg-gray-400 hover:dark:bg-gray-700 ${
              selected === undefined ? 'bg-gray-500/50' : ''
            }`}
          />
        )}
        {options.map((opt, i) => (
          <li
            style={i === 0 ? { border: '' } : {}}
            key={opt.code}
            onClick={() => onSelectOption(opt)}
            className={`text-xs p-2 cursor-pointer border-t border-gray-300 dark:border-gray-600 hover:bg-gray-400 hover:dark:bg-gray-700 ${
              opt.code === selected?.code ? 'bg-gray-500/50' : ''
            }`}
          >
            {opt.name}
          </li>
        ))}
      </ul>
    </Dropdown>
  )
}
