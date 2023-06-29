'use client'

import { Toaster } from 'react-hot-toast'
import ProgressBar from 'next-nprogress-bar'
import React from 'react'

const NProgressBar = () => {
  return (
    <>
      <Toaster
        position='top-right'
        toastOptions={{ style: { fontSize: '12px' } }}
      />
      <ProgressBar
        height='4px'
        color='#11bfff'
        options={{ showSpinner: false }}
        shallowRouting
        appDirectory
      />
    </>
  )
}

export default NProgressBar
