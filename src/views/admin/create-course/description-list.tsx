import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from '@/components/shared'
import DescriptionItem from './description-item'
import { TDescription, initialDescription } from './initial-values'

type Props = {
  list: TDescription[]
  setList: (list: TDescription[]) => void
}

const DescriptionsList = ({ list, setList }: Props) => {
  const addDescription = () => {
    const index = list.length + 1
    setList([...list, { ...initialDescription, index, position: index }])
  }

  const onSaveDesc = (desc: TDescription) => {
    setList(list.map((item) => (item.index === desc.index ? desc : item)))
  }

  const onRemoveDesc = (id: number) => {
    setList(list.filter((desc) => desc.index !== id))
  }

  return (
    <div className='py-2'>
      <div>
        {list.map((desc) => (
          <DescriptionItem
            onRemove={onRemoveDesc}
            onSave={onSaveDesc}
            key={desc.index}
            initial={desc}
          />
        ))}
      </div>

      <div className='flex justify-end mt-2'>
        <Button
          variant='primary'
          className='px-1'
          type='button'
          title='افزودن توضیحات'
          onClick={addDescription}
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  )
}

export default DescriptionsList
