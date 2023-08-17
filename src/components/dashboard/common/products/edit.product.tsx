/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'
import { FC, ReactElement, useEffect, useState } from 'react'
import { allProducts } from '../../../../state/slices/product.slice'
import { notification } from 'antd'
const baseURL = import.meta.env.VITE_URL

interface editProductProps {
  product: allProducts
}

const EditProduct: FC<editProductProps> = ({ product }): ReactElement => {
  const [copyText, setCopyText] = useState<string>('')

  const copyUrl = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      Success()
    })
  }

  useEffect(() => {
    if (product) {
      const url = `${baseURL}/product/${product?.id}`
      setCopyText(url)
    }
  }, [product])

  function Success() {
    notification.success({
      placement: 'top',
      message: <span className=' text-hgreen'>링크 복사됨</span>,
      duration: 3,
      key: 'success',
      style: {
        backgroundColor: 'black',
      },
    })
  }

  return (
    <div className='h-[100%]'>
      <div className='mb-[20px]'>
        <h1 className='font-bold lg:text-3xl text-black text-xl'>
          새 제품 등록하기
        </h1>
      </div>
      <div className='mb-[15px]'>
        <h1 className='font-bold lg:text-xl text-black text-xl'>
          제품 기본 정보
        </h1>
      </div>
      <div className='mb-[8px]'>
        <h1 className='text-tcolor'>제품 메인 카테고리</h1>
      </div>
      <div className='w-full'>
        <p>{product?.category}</p>
      </div>
      <div className='mt-[8px] mb-3'>
        <h1 className='text-tcolor'>제품 판매주소</h1>
      </div>
      <div className='w-full'>
        <p> {product?.product_link} </p>
      </div>
      <div className='mt-[25px]'>
        <h1 className='font-bold lg:text-xl text-black text-xl'>
          제품 파일 관리
        </h1>
      </div>
      <div className='mt-5'>
        {product?.products?.map((pr, index) => {
          return (
            <div key={index} className='mt-3'>
              <div className=' font-bold'> {pr?.name} </div>
              <div className='flex flex-row items-center mt-1'>
                <p>
                  {pr?.model_file &&
                    pr?.model_file.replace('/media/armodels/', '')}
                </p>
                <p className='text-[#999999] pl-4'>
                  {' '}
                  {(pr?.file_size ?? 0).toFixed(2)} GB
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-[25px]'>
        <h1 className='font-bold lg:text-xl text-black text-xl'>제품 상태</h1>
      </div>
      <div className='mt-5 flex flex-row items-center   '>
        <p
          className={` bg-mybcc p-[3px] w-[60px] text-center ${
            product?.health === 'Live' ? 'text-[#15BD66]' : 'text-tcolor'
          }`}
        >
          {product?.health}
        </p>
        <p className='text-[#999999] pl-[10px]'>
          {moment(product?.created_at).format('YYYY.MM.DD')}부터 라이브
        </p>
      </div>
      <div className='w-full flex flex-row items-center  mt-[25px] '>
        <input
          type='text'
          className='inline-block px-2 py-2 bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
          value={copyText}
          style={{ width: '70%' }}
          readOnly
        />
        <button
          className='font-medium ml-[10px] text-sm p-[10px]  rounded text-center w-fit bg-[#F5F5F5] text-black'
          onClick={copyUrl}
        >
          복사
        </button>
      </div>
      <div className='mt-5'>
        <p className='text-[#999999]'>
          등록하는 방법은 <span className='text-[#4270ED]'>이 설명을</span>{' '}
          참고해주세요.
        </p>
      </div>
    </div>
  )
}

export default EditProduct
