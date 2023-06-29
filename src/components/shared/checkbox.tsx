type Props = {
  label: string
  wrapperClassName?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ label, wrapperClassName = '', ...props }: Props) => {
  return (
    <div className='form-control'>
      <label
        className={`cursor-pointer label justify-start gap-2 ${wrapperClassName}`}
      >
        <input
          value=''
          type='checkbox'
          className='checkbox checkbox-info'
          {...props}
        />
        <span className='text-label'>{label}</span>
      </label>
    </div>
  )
}
