import { trpc } from '@/providers/trpc'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
  const { query } = useRouter()
  const [id] = String(query.slug).split('-')
  const { data } = trpc.getCategory.useQuery({ where: { id: +id } })

  console.log(query.slug)
  if (!data) return null

  return (
    <div>
      <div className='flex gap-4 w-full p-4 max-w-[1200] m-auto'>
        {data.cover && (
          <Image width={400} height={200} src={data.cover} alt={data.name} />
        )}
        <header>
          <h1 className='text-3xl'>{data.name}</h1>
        </header>
      </div>
      {data.description && <p>{data.description}</p>}
    </div>
  )
}

export default Header
