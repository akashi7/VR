import { FC, ReactElement } from 'react'
import { Analytics } from '../../../../state/slices/product.slice'
import { UvCardsListData } from '../../utils'

interface analyticsI {
  analytics: Analytics
}

const UvCards: FC<analyticsI> = ({ analytics }): ReactElement => {
  return (
    <div className='flex   justify-between w-[50%] '>
      {UvCardsListData.map((list) => {
        return (
          <div key={list.id} className=''>
            <p className='font-bold  text-black'> {list.title} </p>
            <p className='text-[#4270ED] font-bold   text-lg'>
              {analytics?.total_views || 0}
            </p>
            <p className=''> {analytics?.total_purchases || 0} </p>
            <p className=''>
              {' '}
              {analytics?.total_rate || 0} {'%'}{' '}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default UvCards
