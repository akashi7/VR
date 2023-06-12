import { FC, ReactElement } from 'react'
import { DistributionPeriodCardsListData } from '../../utils'

const PeriodTimeCards: FC = (): ReactElement => {
  return (
    <div className='flex  justify-between w-[70%] '>
      {DistributionPeriodCardsListData.map((list) => {
        return (
          <div key={list.id} className='w-full'>
            <p className='font-bold  text-black'> {list.title} </p>
            <p className='text-[#4270ED] font-bold   text-lg'>{list.number}</p>
            <p className=''> {list.date} </p>
            <div className='flex justify-between items-center w-full'>
              {list.subs?.map((sub) => {
                return (
                  <div key={sub.id} className='mt-[5px]'>
                    <p className='font-bold  text-black text-xs'>
                      {' '}
                      {sub.title}{' '}
                    </p>
                    <p className='text-[#4270ED] font-bold  text-xs'>
                      {' '}
                      {sub.number}{' '}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PeriodTimeCards
