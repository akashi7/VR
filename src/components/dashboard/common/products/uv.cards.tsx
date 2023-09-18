import { FC, ReactElement } from 'react'
import { Analytics } from '../../../../state/slices/product.slice'

interface analyticsI {
  analytics: Analytics
}

const UvCards: FC<analyticsI> = ({ analytics }): ReactElement => {
  return (
    <div className='flex  justify-between w-[50%] '>
      <div>
        <div className='font-bold  text-black'>방문자 수</div>
        <div className='text-[#4270ED] font-bold text-lg'>
          {analytics?.total_views || 0}
        </div>
      </div>
      <div>
        <div className='font-bold  text-black'>구매자 수</div>
        <div className='text-[#4270ED] font-bold text-lg'>
          {analytics?.total_purchases || 0}
        </div>
      </div>
      <div>
        <div className='font-bold  text-black'>구매전환율 (%) </div>
        <div className='text-[#4270ED] font-bold  text-lg'>
          {(analytics?.total_rate ?? 0).toFixed(2) || 0} {'%'}
        </div>
      </div>
    </div>
  )
}

export default UvCards
