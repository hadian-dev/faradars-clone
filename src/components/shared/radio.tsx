type Props = {
  label: string
  wrapperClassName?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Radio = ({ label, wrapperClassName = '', ...props }: Props) => {
  return (
    <label
      className={`flex items-center w-max select-none cursor-pointer ${wrapperClassName}`}
    >
      <input
        type='radio'
        className='w-4 h-4 block m-0 text-sky-500 dark:text-red-600 bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:after:block focus:after:w-full focus:after:h-full focus:after:rounded-full focus:after:ring-2 focus:after:ring-offset-1 focus:after:ring-offset-white focus:after:dark:ring-offset-zinc-800 focus:after:ring-sky-500'
        {...props}
      />
      <span className='py-1 pr-2 text-sm whitespace-nowrap font-medium text-gray-900 dark:text-gray-300'>
        {label}
      </span>
    </label>
  )
}
