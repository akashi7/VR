import { Table } from 'antd'
import { FC, ReactElement } from 'react'
import { distributionColums } from '../../helper'
import { distributionListData } from '../../utils'

const DistributionTime: FC = (): ReactElement => {
  return (
    <div className='mt-[20px] '>
      <div className='flex justify-between items-center '>
        <div className='flex flex-row items-center'>
          <h1 className='font-bold  text-black text-xl'>
            방문 횟수 합계 <span className='text-[#4270ED]'>3,333회</span>
          </h1>
          <h1 className='font-bold  text-black text-xl pl-[25px]'>
            평균 체류 시간 <span className='text-[#4270ED]'>33초</span>
          </h1>
        </div>
        <div>
          <button className='font-bold border  text-sm p-[10px] text-center w-fit text-black bg-[#F5F5F5]'>
            데이터 저장
          </button>
        </div>
      </div>
      <div className='mt-[25px]'>
        <Table
          columns={distributionColums}
          dataSource={distributionListData}
          rowKey={(data) => data.id}
          className='custom-table'
        />
      </div>
    </div>
  )
}

export default DistributionTime
