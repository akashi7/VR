import { FC, ReactElement } from 'react'
import { UvCardsListData } from '../../utils'

const UvCards: FC = (): ReactElement => {
  return (
    <div className='flex   justify-between w-[70%] '>
      {UvCardsListData.map((list) => {
        return (
          <div key={list.id} className=''>
            <p className='font-bold  text-black'> {list.title} </p>
            <p className='text-[#4270ED] font-bold   text-lg'>{list.number}</p>
            <p className=''> {list.subNumber} </p>
            <p className=''> {list.indication} </p>
          </div>
        )
      })}
    </div>
  )
}

export default UvCards
