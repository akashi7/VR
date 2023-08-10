import { Layout, Table } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { CheckBox } from '../../../common/input'
import PeriodTimeCards from '../../common/products/period.cards'
import chart from '../../../../assets/images/ChartThree.png'
import { AvearageColums } from '../../helper'
import { AverageListData } from '../../utils'

const VisitTimePeriod: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked)
  }
  return (
    <Layout className=' h-[100%] p-[18px] bg-white '>
      <div className='mx-auto md:w-[100%] xl:w-[80%] '>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold  text-black text-xl'>
              시간대별 방문 분포
            </h1>
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
          <PeriodTimeCards />
        </div>
        <div className='flex justify-between items-center mt-[30px]'>
          <div>
            <h1 className='font-bold  text-black text-xl'>
              시간대별 방문 그래프
            </h1>
          </div>
          <div className='flex flex-row items-center '>
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
        <div className='flex flex-row items-center mt-[35px]'>
          <div className='flex flex-row items-center'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>방문자 수</p>
          </div>
          <div className='flex flex-row items-center pl-[20px]'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>방문횟수</p>
          </div>
          <div className='flex flex-row items-center pl-[20px]'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>신규 방문자 수</p>
          </div>
          <div className='flex flex-row items-center pl-[20px]'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>재방문자 수</p>
          </div>
          <div className='flex flex-row items-center pl-[20px]'>
            <CheckBox
              onChange={handleCheckboxChange}
              checked={isChecked}
              className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
            />
            <p className='font-bold pl-[10px]'>페이지 뷰</p>
          </div>
        </div>
        <div className='flex justify-between items-center mt-[25px]'>
          <div>
            <h1 className='font-bold  text-black text-xl'>
              시간대별 방문 상세 정보
            </h1>
          </div>
          <div className='flex flex-row items-center '>
            <div className='pl-[20px] '>
              <button className='font-bold border  text-sm p-[10px] text-center w-fit text-black bg-[#F5F5F5]'>
                데이터 저장
              </button>
            </div>
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

export default VisitTimePeriod
