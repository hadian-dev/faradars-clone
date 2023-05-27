import { PATHS } from '@/constants'
import { useTranslation } from '@/hooks'
import { useAppSelector } from '@/redux/store'
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  const data = useAppSelector((state) => state.categoryReducer.items)
  const { t } = useTranslation()

  return (
    <div className='max-w-[1200px] mt-10 m-auto'>
      <div className='flex flex-col items-center pt-3 md:pt-8'>
        <header>
          <h1 className='text-center text-2xl p-2'>{t('selectedTopics')}</h1>
        </header>
        {data && (
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2 my-4 md:p-4'>
            {data
              .filter((c) => c.id !== 1)
              .map((category, i) => (
                <CategoryItem item={category} key={category.id} />
              ))}
          </div>
        )}

        <Link href={PATHS.search.url} className='btn btn-info'>
          {t('allTutorials')}
        </Link>
      </div>
    </div>
  )
}

export default CategoryList

type Props = { item: Category }

function CategoryItem({ item }: Props) {
  return (
    <Link href={PATHS.category.as(item.slug)} className='item'>
      <Image width={80} height={80} src={item.image} alt={item.name} />
      <h2 className='text-sm md:text-base text-center mt-2'>{item.name}</h2>
    </Link>
  )
}
