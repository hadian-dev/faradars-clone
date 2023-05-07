import React from 'react'
import Features from './features'
import { Search } from '@/components/organisms'

const Banner = () => {
  return (
    <div
      className='relative bg-cover'
      style={{ backgroundImage: `url("/images/bookcase.jpg")` }}
    >
      <div className='w-full h-full bg-gray-900/30 text-white backdrop-blur-sm md:backdrop-blur'>
        <div className='max-w-[1200px] m-auto md:h-96 p-4 flex gap-4 flex-col justify-center items-center'>
          <p className='text-center w-full sm:w-3/4'>
            در بین بیش از 20,000 ساعت آموزش فرادرسی جستجو کنید و به جمع میلیونی
            دانشجویان فرادرسی بپیوندید.
          </p>
          <div className='flex gap-4 items-center w-full p-2 sm:w-3/4 max-w-xl'>
            <Search />
            <button className='btn btn-success'>جستجو</button>
          </div>
          <Features />
        </div>
      </div>
    </div>
  )
}

export default Banner
