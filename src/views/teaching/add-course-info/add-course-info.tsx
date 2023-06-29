'use client'

import { TextInput } from '@/components/shared'
import Image from 'next/image'
import React from 'react'

const AddCourseInfoView = () => {
  return (
    <div className='max-w-[1250px] m-auto'>
      <div className='text-center p-4 my-8'>
        <h1 className='text-xl text-center font-bold mb-6'>
          روند همکاری با فرادرس از ارسال عنوان تا ضبط نهایی
        </h1>
        <Image
          alt='teaching-flow'
          width={400}
          height={400}
          src='/images/teaching-flow.png'
          className='m-auto md:pr-20 md:w-auto md:h-auto'
        />
      </div>
      <div className='max-w-[1000px] m-auto p-4'>
        <div className='p-4 border border-gray-300 dark:border-gray-600 rounded'>
          <div className='mb-10 '>
            <h2 className='text-xl font-bold mb-1'>اطلاعات مدرس</h2>
            <p className='mb-1'>
              لطفا اطلاعات این بخش را، در مواردی که امکان تایپ فارسی وجود دارد؛
              تا حد امکان با حروف فارسی وارد کنید.
            </p>
            <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
              <TextInput
                wrapperClassName='mt-2 md:mt-4'
                label='نام و نام خانوادگی'
              />
              <TextInput
                wrapperClassName='mt-2 md:mt-4'
                ltrDirection
                label='آدرس ایمیل'
              />
              <TextInput
                wrapperClassName='mt-2 md:mt-4'
                ltrDirection
                label='تلفن همراه'
              />
              <TextInput
                wrapperClassName='mt-2 md:mt-4'
                label='آخرین وضعیت تحصیلی'
              />
              <TextInput wrapperClassName='mt-2 md:mt-4' label='رشته تحصیلی' />
              <TextInput
                wrapperClassName='mt-2 md:mt-4'
                label='دانشگاه محل تحصیل'
              />
            </div>
          </div>

          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-1'>
              وابستگی سازمانی، دانشگاهی، صنعتی یا شرکتی
            </h2>
            <p className='mb-3'>
              لطفا وابستگی سازمانی، دانشگاهی، صنعتی یا شرکتی خود را (هیأت علمی،
              متخصص در صنعت، فعال در بخش خصوصی شرکت‌ها، دانشجو، فریلنسر و...)
              وارد کنید (حداکثر دو مورد). در صوت نداشتن وابستگی سازمانی فعلی،
              می‌توانید این بخش را خالی بگذارید.
            </p>
            <div className='flex gap-2 border-b border-gray-600 pb-4 sm:border-0 sm:pb-0'>
              <div>
                <span className='text-sm text-gray-700 dark:text-gray-300'>
                  ردیف
                </span>
                <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
                  1
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <TextInput label='نام سازمان، شرکت ...' />
                <TextInput label='موقعیت و نوع همکاری' />
              </div>
            </div>
            <div className='flex mt-2 sm:gap-2'>
              <div className='ml-2 mt-6 sm:ml-0 sm:mt-0'>
                <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
                  2
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <div className='w-full'>
                  <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
                    نام سازمان، شرکت ...
                  </span>
                  <TextInput />
                </div>
                <div className='w-full'>
                  <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
                    موقعیت و نوع همکاری
                  </span>
                  <TextInput />
                </div>
              </div>
            </div>
          </div>
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-1'>اطلاعات آموزش</h2>
            <p className='mb-1'>
              لطفا عناوین آموزش‌هایی را که تمایل به ارائه آن‌ها در فرادرس دارید؛
              در جدول زیر وارد کنید.
            </p>
            <p className='mb-3'>
              در صورت تمایل می‌توانید یکی از عنوان‌های جدول عناوین پیشنهادی (که
              در ادامه آمده است) را نیز انتخاب و در این جدول، وارد کنید.
            </p>
            <div className='flex gap-2 border-b border-gray-600 pb-4 sm:border-0 sm:pb-0'>
              <div>
                <span className='text-sm text-gray-700 dark:text-gray-300'>
                  ردیف
                </span>
                <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
                  1
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <TextInput label='عنوان آموزش' />
                <TextInput label='مدت زمان (ساعت)' />
              </div>
            </div>
            <div className='flex mt-2 sm:gap-2'>
              <div className='ml-2 mt-6 sm:ml-0 sm:mt-0'>
                <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
                  2
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <div className='w-full'>
                  <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
                    عنوان آموزش
                  </span>
                  <TextInput />
                </div>
                <div className='w-full'>
                  <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
                    مدت زمان (ساعت)
                  </span>
                  <TextInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// type InputRawProps = {
//   raws:{}
// }

// function InputRaw() {
//   return (
//     <>
//       <div className='flex gap-2 border-b border-gray-600 pb-4 sm:border-0 sm:pb-0'>
//         <div>
//           <span className='text-sm text-gray-700 dark:text-gray-300'>ردیف</span>
//           <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
//             1
//           </div>
//         </div>
//         <div className='flex flex-col sm:flex-row gap-2 w-full'>
//           <TextInput label='نام سازمان، شرکت ...' />
//           <TextInput label='موقعیت و نوع همکاری' />
//         </div>
//       </div>
//       <div className='flex mt-2 sm:gap-2'>
//         <div className='ml-2 mt-6 sm:ml-0 sm:mt-0'>
//           <div className='w-10 h-[42px] flex justify-center items-center text-center bg-gray-400 dark:bg-gray-600 rounded'>
//             2
//           </div>
//         </div>
//         <div className='flex flex-col sm:flex-row gap-2 w-full'>
//           <div className='w-full'>
//             <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
//               نام سازمان، شرکت ...
//             </span>
//             <TextInput />
//           </div>
//           <div className='w-full'>
//             <span className='sm:hidden text-sm text-gray-700 dark:text-gray-300'>
//               موقعیت و نوع همکاری
//             </span>
//             <TextInput />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default AddCourseInfoView
