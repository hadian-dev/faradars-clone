import { SearchIcon } from '@/shared'

export function Search() {
  return (
    <label className='relative block w-full'>
      <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
        <SearchIcon className='h-5 w-5 fill-slate-400' />
      </span>
      <input className='input w-full pr-9' placeholder='جستجوی آموزش ...' />
    </label>
  )
}
