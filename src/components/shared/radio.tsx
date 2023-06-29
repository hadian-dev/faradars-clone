type Props = {
  label: string
  wrapperClassName?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Radio = ({ label, wrapperClassName = '', ...props }: Props) => {
  return (
    <div className='form-control'>
      <label
        className={`cursor-pointer label justify-start gap-2 ${wrapperClassName}`}
      >
        <input type='radio' className='radio radio-info' {...props} />
        <span className='text-label text-sm'>{label}</span>
      </label>
    </div>
  )
}
