import { Layout } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { Input } from '../../common/input'
import DailyAverage from '../common/products/average'
import DistributionTime from '../common/products/distribution'

const VisitDuration: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const [isDistribution, setIsDistribution] = useState(true)

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <Layout className='xl:p-[10px] p-[18px] md:p-[20px]  bg-white h-full'>
      <div className='mx-auto md:w-[100%] xl:w-[85%] '>
        <div className='flex justify-between items-center '>
          <div>
            <h1 className='font-bold lg:text-3xl text-black text-xl'>
              방문 체류 시간
            </h1>
          </div>
          <div>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='select'
              style={{ width: '100%' }}
              options={['지난 1일', '인테리어 가구']}
              className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>
        <div className='flex flex-row items-center  border-b border-[#EBEBEB] mt-[35px] '>
          <div
            className={
              isDistribution
                ? `border-b-2 border-black font-medium text-lg text-black hover:cursor-pointer`
                : 'text-tcolor font-medium text-lg hover:cursor-pointer '
            }
            onClick={() => setIsDistribution(true)}
          >
            체류 시간 분포
          </div>
          <div
            className={
              !isDistribution
                ? 'border-b-2 border-black font-medium text-lg text-black ml-[20px] hover:cursor-pointer'
                : 'text-tcolor font-medium text-lg  ml-[20px] hover:cursor-pointer'
            }
            onClick={() => setIsDistribution(false)}
          >
            일일 평균
          </div>
        </div>
        {isDistribution ? <DistributionTime /> : <DailyAverage />}
      </div>
    </Layout>
  )
}

export default VisitDuration
