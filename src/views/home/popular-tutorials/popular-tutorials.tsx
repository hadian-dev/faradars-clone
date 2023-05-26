import { Slider } from '@/components/organisms'
import React, { useState } from 'react'

const tabs = [
  { name: 'همه', code: '' },
  { name: 'برنامه نویسی', code: '' },
  { name: 'یادگیری ماشین', code: '' },
  { name: '', code: '' },
  { name: '', code: '' },
  { name: '', code: '' },
]

const PopularTutorials = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className='max-w-[1200px] mt-14 m-auto'>
      <h1 className='mb-4'>آموزش های پر مخاطب</h1>
      <div className='tabs border-b border-slate-300 dark:border-slate-700'>
        <div className='tab'>tab 1</div>
        <div className='tab'>tab 2</div>
        <div className='tab'>tab 3</div>
      </div>
      <div className='p-2'>
        <Slider />
      </div>
    </div>
  )
}

export default PopularTutorials
