import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/shared'
import { LearningSVG } from '@/assets/svgs'

const PublishSteps = () => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const visited = useRef(false)

  useEffect(() => {
    if (!containerRef.current || !visited.current) return

    containerRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }, [open])

  const toggle = () => {
    setOpen((prev) => !prev)
    visited.current = true
  }

  return (
    <section className='p-8 mb-12'>
      <div className='max-w-[1250px] m-auto'>
        <div className='flex flex-col gap-2 md:flex-row items-center justify-between mb-20'>
          <div className='max-w-[500px] md:max-w-[400px] lg:max-w-[600px]'>
            <h1 className='text-center md:text-right text-2xl font-bold mb-6'>
              فرایند انتشار آموزش
            </h1>
            <p className='text-justify mb-6'>
              تولید محتوای آموزشی با کیفیت، هم از جهت محتوایی و روش تدریس، هم از
              ابعاد فنی و چگونگی ارائه محتوا، همواره اولویت فرادرس بوده است. در
              همین راستا، تیم همکاران فرادرس، از ابتدا تا انتشار روی سایت، گام
              به گام با مدرسین، به پیش می‌روند تا بهترین خروجی را برای انتشار
              آماده کنند و در اختیار مخاطبین و دانشجویان، قرار دهند. برای مشاهده
              مراحل تدریس در فرادرس، از پیشنهاد عنوان تا ارائه آموزش، روی
              آکاردیون زیر، کلیک کنید.
            </p>
            {/* <Button
              variant='warning'
              className='py-2 px-6 mt-6'
              onClick={toggle}
            >
              مشاهده مراحل انتشار آموزش
            </Button> */}
            <button className='btn btn-warning' onClick={toggle}>
              مشاهده مراحل انتشار آموزش
            </button>
          </div>
          <LearningSVG className='max-h-[500px] lg:max-h-[600px]' />
        </div>

        <div
          style={
            open
              ? {
                  height: containerRef.current?.offsetHeight,
                  overflow: 'visible',
                }
              : { maxHeight: 0, overflow: 'hidden' }
          }
        >
          <div
            ref={containerRef}
            className='flex flex-col items-center transition-all'
          >
            <div className='max-w-[400px] rounded-full p-4 border-2 border-sky-400'>
              <div className='rounded-full p-8 bg-info flex justify-center items-center flex-col'>
                <h1 className='text-xl font-bold mb-4 text-center whitespace-nowrap'>
                  انتشار آموزش
                </h1>
                <p className='text-center'>
                  دوره شما در فرادرس منتشر و دانشجویان به آن دسترسی خواهند داشت.
                  با معرفی دوره خود در شبکه‌های اجتماعی شخصی و حرفه‌ای خود،
                  امتیازات و نظرات را از دوره خود دریافت کنید.
                </p>
              </div>
            </div>
            <div className='p=4 flex justify-center'>
              <div className='flex'>
                <div className='w-1/2'>
                  <Leaf
                    stepNumber={5}
                    title='تدوین حرفه‌ای ویدئوها توسط تیم فرادرس'
                    desc='تدوین لحظه به لحظه ویدئوهای آموزشی، توسط تیم حرفه‌ای ضبط و تدوین فرادرس (به صورت رایگان)'
                  />
                  <Leaf
                    stepNumber={3}
                    title='انعقاد قرارداد و شروع ضبط'
                    desc='تکمیل فرم قرارداد و انتخاب ضبط در منزل یا استودیوهای مجهز ضبط آموزشی فرادرس (تجهیزات ضبط آموزشی به صورت رایگان در اختیار مدرسین دورکار قرار می‌گیرد و پشتیبان ضبط گام به گام همراه مدرس خواهد بود و حضور مدرس در استودیو نیز رایگان و به همراه پشتیبان و همراه ضبط، است)'
                  />

                  <Leaf
                    stepNumber={1}
                    title='هماهنگی اولیه'
                    desc='هماهنگی اولیه و اعلام عناوین پیشنهادی توسط مدرس'
                  />
                </div>
                <div className='w-2 bg-green-600 z-10 relative'></div>
                <div className='w-1/2  mt-36'>
                  <Leaf
                    leftSide
                    stepNumber={4}
                    title='ضبط آموزش با پشتیبانی تیم حرفه‌ای ضبط'
                    desc='هماهنگی و راهنمایی کامل و گام به گام تیم پشتیبانی ضبط آموزشی فرادرس از گام اول شروع ضبط تا آخرین مرحله انتشار'
                  />
                  <Leaf
                    leftSide
                    stepNumber={2}
                    title='ارسال سرفصل و پیش‌ ضبط'
                    desc='ارسال سرفصل توسط مدرس و هماهنگی جهت ارسال فیلم پیش‌ ضبط'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PublishSteps

type LeafProp = {
  title: string
  desc: string
  stepNumber: number
  leftSide?: boolean
}

function Leaf({ title, desc, stepNumber, leftSide }: LeafProp) {
  const leftClass = 'rounded-br-none rounded-tl-none border-l-0 -right-1'
  const rightClass = 'rounded-bl-none rounded-tr-none border-r-0 -left-1'

  return (
    <div className='relative inline-block w-full mt-10 mb-24'>
      <div
        className={`w-20 h-20 absolute border-4 border-green-600 rounded-[90px] border-b-0 bottom-0 ${
          leftSide ? leftClass : rightClass
        }`}
      />
      <div
        className={`bg-green-300 dark:bg-green-700 p-6 mb-[70px] relative z-10 ${
          leftSide
            ? 'rounded-tr-[90px] rounded-bl-[80px] mr-12'
            : 'rounded-tl-[90px] rounded-br-[80px] ml-12'
        }`}
      >
        <div className='flex gap-2 justify-center items-center mb-4'>
          <div className='w-8 h-8 flex justify-center items-center rounded-full border border-green-900 dark:border-white'>
            {stepNumber}
          </div>
          <h2 className='text-xl font-bold text-center'>{title}</h2>
        </div>
        <p className='text-center mb-4'>{desc}</p>
      </div>
    </div>
  )
}
