import { TfiLayoutGrid3Alt } from 'react-icons/tfi'
import { FaThList } from 'react-icons/fa'
import { useRouter, useSearchParams } from 'next/navigation'
import { PATHS, SEARCH_PARAMS } from '@/constants'

const sortList = [
  { code: 'popular', name: 'پرمخاطب ترین' },
  { code: 'newest', name: 'جدید ترین' },
  { code: 'most-viewed', name: 'بیشترین بازدید' },
]

const SortBar = () => {
  const params = useSearchParams()
  const router = useRouter()
  const selected = params.get(SEARCH_PARAMS.ORDER_BY)

  const onSelect = (item: (typeof sortList)[0]) => {
    if (selected && selected === item.code) return

    const newParams = new URLSearchParams(params as any)
    newParams.set(SEARCH_PARAMS.ORDER_BY, item.code)
    router.push(PATHS.courses.as(newParams.toString()))
  }

  return (
    <div className='flex justify-between items-center gap-2 border-b border-zinc-300 dark:border-zinc-700'>
      <div className='flex items-center'>
        <p className='p-3'>مرتب سازی:</p>
        <ul className='flex items-center'>
          {sortList.map((item) => (
            <li
              key={item.code}
              role='button'
              onClick={() => onSelect(item)}
              className={`${
                item.code === (selected || sortList[0].code)
                  ? 'border-b-2 border-sky-500'
                  : ''
              } dark:border-sky-400 p-3 cursor-pointer`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex'>
        <button className='p-1' aria-label='grid'>
          <TfiLayoutGrid3Alt className='text-sky-500 dark:text-sky-400' />
        </button>
        <button className='p-1' aria-label='list'>
          <FaThList />
        </button>
      </div>
    </div>
  )
}

export default SortBar
