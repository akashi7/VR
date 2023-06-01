import { Layout } from 'antd'
import { FC, ReactElement, useState } from 'react'
import chair from '../../../assets/images/c2.png'
import { Input } from '../../common/input'
import Plus from '../../../assets/images/Plus.png'
import Minus from '../.././../assets/images/Minus.png'

const NewProduct: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState(
    '마르셀 브로이어 바실리 체어 Marcel Breuer Wassily'
  )

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <Layout className='bg-white'>
      <div className='flex flex-row w-[80%] mx-auto p-[40px]'>
        <div className='relative w-[50%] '>
          <img src={chair} alt='chair' className='w-fit' />
          <div className=' absolute  bottom-2   right-2  flex justify-around  '>
            <img src={Plus} alt='plus' className='m-1' />
            <img src={Minus} alt='minus' className='m-1' />
          </div>
        </div>
        <div className='relative w-[35%]   p-[20px] '>
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
            <h1 className='text-tcolor'>제품 이름</h1>
          </div>
          <div className='w-full'>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='text'
              style={{ width: '100%' }}
              className='inline-block px-2 py-2 bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mt-[15px]'>
            <h1 className='text-tcolor'>제품 카테고리</h1>
          </div>
          <div className='mt-[15px]'>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='select'
              style={{ width: '100%' }}
              options={['인테리어 가구', '인테리어 가구']}
              className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mt-[25px]'>
            <h1 className='font-bold lg:text-xl text-black text-xl'>
              제품 파일 관리
            </h1>
          </div>
          <div className='mt-[15px]'>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='select'
              style={{ width: '100%' }}
              options={['상세 옵션 추가', '상세 옵션 추가']}
              className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mt-[25px]'>
            <h1 className='font-bold lg:text-xl text-black text-xl'>
              제품 상태 관리
            </h1>
          </div>
          <div className='mt-[15px]'>
            <h1 className='text-tcolor'>제품 이름</h1>
          </div>
          <div className='mt-[15px]'>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              type='select'
              style={{ width: '100%' }}
              options={['상세 옵션 추가', '상세 옵션 추가']}
              className='inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='absolute bottom-1   right-0 w-[50%] px-[20px]  '>
            <div className=' w-full flex flex-row'>
              <button className='font-medium  text-sm p-[10px] text-center w-[30%] text-black bg-onOK'>
                취소
              </button>
              <button className='font-medium ml-[10px] text-sm p-[10px]  rounded text-center w-[90%] bg-black text-white'>
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewProduct
