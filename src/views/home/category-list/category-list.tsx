import { PATHS } from '@/constants'
import { useTranslation } from '@/hooks'
import { trpc } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  const { data } = trpc.getCategoryList.useQuery({ take: 24 })
  const { t } = useTranslation()

  return (
    <div className='max-w-[1200px] m-auto'>
      <div className='flex flex-col items-center pt-3 md:pt-8'>
        <header>
          <h1 className='text-center text-2xl p-2'>{t('selectedTopics')}</h1>
        </header>
        {data && (
          <div className='flex flex-wrap gap-2 justify-center my-4 md:p-4'>
            {data
              .filter((c) => c.id !== 1)
              .map((category) => (
                <Link
                  key={category.id}
                  href={PATHS.category.as(category.slug)}
                  className='item'
                >
                  <Image
                    width={80}
                    height={80}
                    src={category.image}
                    alt={category.name}
                  />
                  <h2 className='text-sm md:text-base text-center mt-2'>
                    {category.name}
                  </h2>
                </Link>
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
