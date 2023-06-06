type Props = {
  label: string
  wrapperClassName?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ label, wrapperClassName = '', ...props }: Props) => {
  return (
    <label
      className={`flex items-center w-max select-none cursor-pointer ${wrapperClassName}`}
    >
      <input
        type='checkbox'
        className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-500 focus:dark:ring-sky-600 focus:dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
        {...props}
      />
      <span className='py-1 pr-2 text-sm whitespace-nowrap font-medium text-gray-900 dark:text-gray-300'>
        {label}
      </span>
    </label>
  )
}
