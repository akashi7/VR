import { Layout, Table } from 'antd'
import { FC, ReactElement, useState } from 'react'
import chart from '../../../../assets/images/ChartFour.png'
// import { Input } from '../../../common/input'
import InflowStatusCards from '../../common/products/inflow.cards'
import { AvearageColums } from '../../helper'
import { AverageListData } from '../../utils'

const InflowStatus: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <Layout className=' h-[100%] p-[18px] bg-white '>
      <div className='mx-auto md:w-[100%] xl:w-[80%] '>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold  text-black text-xl'>검색 유입 현황</h1>
          </div>
          <div className='flex flex-row items-center '>
            <div>
              {/* <Input
                value={inputValue}
                onChange={handleInputChange}
                type='select'
                style={{ width: '100%' }}
                options={['지난 1일', '인테리어 가구']}
                className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
              /> */}
            </div>
          </div>
        </div>
        <div className='mt-[30px]'>
          <InflowStatusCards />
        </div>
        <div className='flex justify-between items-center mt-[30px]'>
          <div>
            <h1 className='font-bold  text-black text-xl'>검색 채널 그래프</h1>
          </div>
          <div className='flex flex-row items-center '>
            <div>
              {/* <Input
                value={inputValue}
                onChange={handleInputChange}
                type='select'
                style={{ width: '100%' }}
                options={['막대 그래프', '인테리어 가구']}
                className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
              /> */}
            </div>
            <div className='pl-[20px] '>
              <button className='font-bold border  text-sm p-[10px] text-center w-fit text-black bg-[#F5F5F5]'>
                대시 보드 추가
              </button>
            </div>
          </div>
        </div>
        <div className='mt-[50px]'>
          <img src={chart} alt='graph' className='w-full' />
        </div>
        <div className='flex justify-between items-center mt-[25px]'>
          <div>
            <h1 className='font-bold  text-black text-xl'>
              방문 현황 상세 정보
            </h1>
          </div>
        </div>
        <div className='mt-[6px] '>
          <div className='mt-[25px]'>
            <Table
              columns={AvearageColums}
              dataSource={AverageListData}
              rowKey={(data) => data.id}
              className='custom-table'
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InflowStatus
