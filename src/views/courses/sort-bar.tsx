import { TfiLayoutGrid3Alt } from 'react-icons/tfi'
import { FaThList } from 'react-icons/fa'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const sortList = [
  { code: 'popular', name: 'پرمخاطب ترین' },
  { code: 'newest', name: 'جدید ترین' },
  { code: 'most-viewed', name: 'بیشترین بازدید' },
]

const SortBar = () => {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const selected = params.get('orderBy')

  const onSelect = (item: (typeof sortList)[0]) => {
    const sParams = new URLSearchParams(params.toString())
    sParams.set('orderBy', item.code)

    if (selected && item.code === sortList[0].code) {
      sParams.delete('orderBy')
    }

    const path = `${pathname}?${sParams.toString()}`
    router.push(path)
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
        <button className='p-1'>
          <TfiLayoutGrid3Alt className='text-sky-500 dark:text-sky-400' />
        </button>
        <button className='p-1'>
          <FaThList />
        </button>
      </div>
    </div>
  )
}

export default SortBar
