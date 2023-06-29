'use client'

import { trpc } from '@/providers/trpc'
import { useParams } from 'next/navigation'
import React from 'react'

const UpdateCourseView = () => {
  const { slug } = useParams()
  const [id] = decodeURIComponent(slug).split('-')
  const { data } = trpc.getCourse.useQuery({
    where: { id: +id },
    // select: { name: true },
  })

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  )
}

export default UpdateCourseView
