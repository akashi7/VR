import { Layout } from 'antd'
import { FC, ReactElement, useState } from 'react'
import gemStone from '../../../assets/images/gem-stone.png'
import { Input } from '../../common/input'
import vector from '../../../assets/images/Vectortwo.png'

const FinishedAppointment: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState(
    '"code": "RnYX2w532omp6gDQgVNeyqAp"'
  )

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <Layout className='bg-white  relative    h-screen w-full '>
      <div className='w-[50%]  mx-auto  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-center'>
          <img src={gemStone} alt='gemstone' />
        </div>
        <div className=' text-center  mt-[45px]  '>
          <h1 className='font-bold lg:text-2xl text-black text-xl'>
            제품이 라이브 중인 제품 목록에 등록되었어요!
          </h1>
        </div>
        <div className=' text-center mt-[25px]  '>
          <h1 className=' lg:text-base text-tcolor text-base '>
            반드시 아래 코드를 자사몰 상세 페이지에 등록하셔야 AR 서비스가
            정상적으로 작동됩니다.
          </h1>
        </div>
        <div className=' text-center  '>
          <h1 className=' lg:text-base text-tcolor text-base '>
            자세한 등록 방법은 이 설명을 참고해 주세요.
          </h1>
        </div>
        <div className='w-full flex flex-row items-center justify-center mt-[25px]  '>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            type='text'
            style={{ width: '32%' }}
            className='inline-block px-2 py-2 bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
          />
          <button className='font-medium ml-[10px] text-sm p-[10px]  rounded text-center w-fit bg-black text-white'>
            복사
          </button>
        </div>
        <div className='flex flex-row justify-center items-center mt-[25px]  '>
          <div>
            <h1>제품 목록 보기</h1>
          </div>
          <img src={vector} alt='vector' className='pl-[10px] ' />
        </div>
      </div>
    </Layout>
  )
}

export default FinishedAppointment
