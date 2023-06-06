import { Swiper, SwiperSlide } from 'swiper/react'
import { CardItem } from '../card-item'

export const Slider = () => {
  return (
    <Swiper spaceBetween={16} slidesPerView='auto'>
      {Array.from({ length: 10 }, (v, i) => i).map((v) => (
        <SwiperSlide key={v} style={{ width: 'auto' }}>
          {/* <CardItem /> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
