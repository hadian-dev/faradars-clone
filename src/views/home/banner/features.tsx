import { Spinner } from '@/shared'
import { splitArray } from '@/utils'
import { useEffect, useState } from 'react'

type FeatureType = {
  id: string
  name: string
  value: number
  before: string
}

const FEATURES: FeatureType[] = [
  { id: '1', name: 'حوزه تخصصی', value: 280, before: '' },
  { id: '2', name: 'نفر دانشجو', value: 1700000, before: '+' },
  { id: '3', name: 'عنوان آموزشی', value: 6200, before: '+' },
  { id: '4', name: 'نفر مدرس', value: 2000, before: '+' },
  { id: '5', name: 'ساعت آموزش', value: 23000, before: '+' },
  { id: '6', name: 'ساعت یادگیری', value: 48000000, before: '+' },
]

function Features() {
  const [features, setFeatures] = useState<FeatureType[][]>([])

  useEffect(() => {
    const time = setTimeout(() => {
      setFeatures(splitArray(FEATURES, 2))
    }, 1000)

    return () => clearTimeout(time)
  }, [])

  return (
    <div className='bg-black/40 p-4 flex flex-wrap justify-evenly w-full rounded-md sm:w-5/6'>
      <Spinner loading={!features.length} />
      {features.map((feats, i) => (
        <div
          key={i.toString()}
          className='flex flex-col lg:flex-row justify-evenly sm:w-2/12 lg:w-3/12 flex-1 gap-4'
        >
          {feats.map((feat) => (
            <Feature feature={feat} key={feat.id} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Features

function Feature({ feature }: { feature: FeatureType }) {
  const [feat, setFeat] = useState({ ...feature, value: 0 })

  useEffect(() => {
    const target = feature.value
    const inc = target / 50

    const timer = setInterval(() => {
      if (feat.value >= target) {
        clearInterval(timer)
        return
      }

      const value = Math.ceil(feat.value + inc)
      setFeat((prev) => ({
        ...prev,
        value: value > target ? target : value,
      }))
    }, 30)

    return () => clearInterval(timer)
  }, [feat.value, feature.value])

  return (
    <div key={feat.id} className='flex items-center gap-1 flex-col flex-1'>
      <span>
        {feat.value.toLocaleString('fa', { currency: 'IRR' })} {feat.before}
      </span>
      <span className='text-xsm'>{feat.name}</span>
    </div>
  )
}
