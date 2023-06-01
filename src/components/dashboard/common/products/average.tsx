import { FC, ReactElement, useState } from 'react'
import chart from '../../../../assets/images/Chart.png'
import { Input } from '../../../common/input'
import { CheckBox } from '../../../common/input'
import { Table } from 'antd'
import { AvearageColums } from '../../helper'
import { AverageListData } from '../../utils'

const DailyAverage: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked)
  }
  const handleInputChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <div className='mt-[20px] h-[100%] '>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold  text-black text-xl'>
            평균 체류 시간 그래프
          </h1>
        </div>
        <div className='flex flex-row items-center '>
          <div>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='select'
              style={{ width: '100%' }}
              options={['선 그래프', '인테리어 가구']}
              className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
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
      <div className='flex flex-row items-center mt-[35px]'>
        <div className='flex flex-row items-center'>
          <CheckBox
            onChange={handleCheckboxChange}
            checked={isChecked}
            className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
          />
          <p className='font-bold pl-[10px]'>평균 체류 시간</p>
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
          <p className='font-bold pl-[10px]'>총 체류 시간</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-[25px]'>
        <div>
          <h1 className='font-bold  text-black text-xl'>일일 평균 체류 시간</h1>
        </div>
        <div className='flex flex-row items-center '>
          <div>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='select'
              style={{ width: '100%' }}
              options={['10개씩 보기', '인테리어 가구']}
              className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
          </div>
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
  )
}

export default DailyAverage
