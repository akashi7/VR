import { Pagination } from 'antd'
import React from 'react'

interface PaginatorProps {
  total?: number
  setCurrentPage?: (page: number) => void
  pageSize?: number
  totalPages: number
}

const Paginator: React.FC<PaginatorProps> = ({
  total = 0,
  setCurrentPage = () => null,
  pageSize = 10,
  totalPages,
}) => {
  const onChange = (page: number) => {
    setCurrentPage(page - 1)
  }

  return totalPages > 1 ? (
    <div className='grid justify-end mt-[32px]  w-[100%]'>
      <Pagination
        onChange={onChange}
        showSizeChanger={false}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
      />
    </div>
  ) : null
}

export default Paginator
