import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

const BasicInformation: FC = (): ReactElement => {
  const basicInfoMatch = useMatch('/sd/')
  const billingMatch = useMatch('/sd/vt')
  const navigate = useNavigate()

  return (
    <Layout className='lg:p-[10px] p-[18px]  bg-white'>
      <div className='mx-auto lg:w-[70%] w-full  '>
        <div className='mb-[20px] lg:hidden block'>
          <h1 className='font-semibold text-xl text-black '>마이 페이지</h1>
          <div className='flex flex-row items-center mt-[15px] '>
            <div
              className={
                basicInfoMatch
                  ? `border-b-2 border-black font-medium text-lg text-black hover:cursor-pointer`
                  : 'text-tcolor font-medium text-lg hover:cursor-pointer '
              }
              onClick={() => navigate('/sd/')}
            >
              기본 정보
            </div>
            <div
              className={
                billingMatch
                  ? 'border-b-2 border-black font-medium text-lg text-black ml-[20px] hover:cursor-pointer '
                  : 'text-tcolor font-medium text-lg  ml-[20px] hover:cursor-pointer'
              }
              onClick={() => navigate('/sd/vt')}
            >
              요금제 관리
            </div>
          </div>
        </div>
        <div className='mb-[30px]'>
          <h1 className='font-bold lg:text-3xl text-black text-2xl'>
            기본 정보
          </h1>
        </div>
        <div className='mb-[20px]'>
          <h1 className='text-xl font-semibold text-black'>계정 정보</h1>
        </div>
        <div className='flex justify-between items-center '>
          <div className='flex flex-col'>
            <p className='font-semibold text-sm'>로그인 한 계정</p>
            <p className='font-thin text-sm mt-[5px]'>helloar@naver.com</p>
          </div>
          <div>
            <button className='w-fit  text-black  font-medium  text-sm p-[10px] text-center border-solid border-2 border-navactive-800'>
              로그아웃
            </button>
          </div>
        </div>
        <div className='mt-[40px] mb-[20px]'>
          <h1 className='text-xl font-semibold text-black'>구독 정보</h1>
        </div>
        <div className='flex justify-between items-center '>
          <div className='flex flex-col'>
            <p className='font-semibold text-sm'>이용 중인 요금제</p>
            <p className='font-thin text-sm  text-tcolor mt-[5px] '>
              아직 사용 중인 요금제가 없습니다.
            </p>
          </div>
          <div>
            <button className='w-fit  text-black  font-medium  text-sm p-[10px] text-center border-solid border-2 border-navactive-800'>
              요금제 보기
            </button>
          </div>
        </div>
        <div className='border-t border-navactive-400 mt-[40px] '></div>
        <div className='mt-[20px]'>
          <p className='text-tred'>회원 탈퇴</p>
        </div>
      </div>
    </Layout>
  )
}

export default BasicInformation
