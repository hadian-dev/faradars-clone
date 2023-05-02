import { SearchIcon } from '@/shared'

export function Search() {
  return (
    <label className='relative block w-full'>
      <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
        <SearchIcon className='h-5 w-5 fill-slate-400' />
      </span>
      <input
        className='placeholder:text-slate-400 block w-full border border-slate-200 rounded-md py-2 pr-9 pl-3 focus:outline-none focus:border-sky-500 sm:text-sm'
        placeholder='جستجوی آموزش ...'
      />
    </label>
  )
}
