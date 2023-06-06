import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react'
import { CardItem } from '@/components/organisms'
import { useAppSelector } from '@/redux/store'

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
      <Panel />
    </div>
  )
}

const Panel = () => {
  const courseList = useAppSelector((state) => state.course.items)

  return (
    <div className='p-2'>
      <Swiper spaceBetween={16} slidesPerView='auto'>
        {courseList.map((item) => (
          <SwiperSlide
            className='h-auto flex'
            key={item.id}
            style={{ width: 'auto', height: 'auto' }}
          >
            <CardItem course={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PopularTutorials
