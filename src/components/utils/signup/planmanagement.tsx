import { Layout } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { CheckBox } from '../../common/input'
import okImage from '../../../assets/images/ok.png'

const PlanManagment: FC = (): ReactElement => {
  const basicInfoMatch = useMatch('/sd/')
  const planMatch = useMatch('/sd/plan')
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked)
  }
  return (
    <Layout className='lg:p-[10px] p-[18px]  bg-white h-full lg:h-screen'>
      <div className='mx-auto lg:w-[85%] '>
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
                planMatch
                  ? 'border-b-2 border-black font-medium text-lg text-black ml-[20px] hover:cursor-pointer '
                  : 'text-tcolor font-medium text-lg  ml-[20px] hover:cursor-pointer'
              }
              onClick={() => navigate('/sd/plan')}
            >
              요금제 관리
            </div>
          </div>
        </div>
        <div className='mb-[30px]'>
          <h1 className='font-bold lg:text-3xl text-black text-xl'>
            요금제 관리
          </h1>
          <h1 className='lg:mt-[10px] lg:text-lg text-tcolor text-base mt-[10px]'>
            쇼핑몰 규모와 목적에 맞춰 요금제를 선택해 보세요.
          </h1>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold lg:text-xl text-black text-lg'>
            이용할 요금제를 선택 후 결제하기 버튼을 클릭해 주세요!
          </h1>
          <div>
            <button className='w-fit hidden lg:block  text-mycloror bg-mybcc  font-medium  text-sm p-[10px] text-center border-solid border-2 border-navactive-800'>
              결제하기
            </button>
          </div>
        </div>
        <div className='mt-[20px] lg:mt-[40px] lg:grid lg:grid-cols-4 gap-5 lg:h-[600px]'>
          <div className=' w-[100%] p-[20px] border border-mycloror-600 mb-[20px] rounded-md'>
            <div className='flex justify-between'>
              <div>
                <p className='font-bold lg:text-lg text-black text-base'>
                  기본 요금제
                </p>
                <p className='lg:text-lg text-tcolor text-base mt-[15px]'>
                  가장 기본 요금제 입니다.
                </p>
              </div>
              <div>
                <CheckBox onChange={handleCheckboxChange} checked={isChecked} />
              </div>
            </div>
            <div className='mt-[15px]'>
              <p className='text-hblue font-semibold text-xl'>월 / 30,000원</p>
            </div>
            <div className='border-t border-navactive-400 mt-[20px] mb-[20px] lg:mt-[40px] lg:mb-[40px]   '></div>
            <div className='flex flex-row mb-[15px] items-center '>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center '>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
          </div>
          <div className=' w-[100%] p-[20px] border border-mycloror-600 mb-[20px] rounded-md'>
            <div className='flex justify-between'>
              <div>
                <p className='font-bold lg:text-lg text-black text-base'>
                  레벨 2 요금제
                </p>
                <p className='lg:text-lg text-tcolor text-base mt-[15px]'>
                  레벨 2 요금제 입니다.
                </p>
              </div>
              <div>
                <CheckBox onChange={handleCheckboxChange} checked={isChecked} />
              </div>
            </div>
            <div className='mt-[15px]'>
              <p className='text-hblue font-semibold text-xl'>월 / 60,000원</p>
            </div>
            <div className='border-t border-navactive-400 mt-[20px] mb-[20px] lg:mt-[40px] lg:mb-[40px]  '></div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center '>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
          </div>
          <div className=' w-[100%] p-[20px] border border-mycloror-600 mb-[20px] rounded-md'>
            <div className='flex justify-between'>
              <div>
                <p className='font-bold lg:text-lg text-black text-base'>
                  레벨 3 요금제
                </p>
                <p className='lg:text-lg text-tcolor text-base mt-[15px]'>
                  레벨 3 요금제 입니다.
                </p>
              </div>
              <div>
                <CheckBox onChange={handleCheckboxChange} checked={isChecked} />
              </div>
            </div>
            <div className='mt-[15px]'>
              <p className='text-hblue font-semibold text-xl'>월 / 90,000원</p>
            </div>
            <div className='border-t border-navactive-400 mt-[20px] mb-[20px] lg:mt-[40px] lg:mb-[40px]  '></div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center '>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
          </div>
          <div className=' w-[100%] p-[20px] border border-mycloror-600 mb-[20px] rounded-md'>
            <div className='flex justify-between'>
              <div>
                <p className='font-bold lg:text-lg text-black text-base'>
                  프리미엄 요금제
                </p>
                <p className='lg:text-lg text-tcolor text-base mt-[15px]'>
                  프리미엄 요금제 입니다.
                </p>
              </div>
              <div>
                <CheckBox onChange={handleCheckboxChange} checked={isChecked} />
              </div>
            </div>
            <div className='mt-[15px]'>
              <p className='text-hblue font-semibold text-xl'>월 / 100,000원</p>
            </div>
            <div className='border-t border-navactive-400 mt-[20px] mb-[20px] lg:mt-[40px] lg:mb-[40px] '></div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center '>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
            <div className='flex flex-row mb-[15px] items-center'>
              <img src={okImage} alt='okImage' />
              <p className='pl-[20px] font-semibold'>
                라이브 제품 20개 등록 가능
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className='w-full block lg:hidden text-mycloror bg-mybcc  font-medium  text-sm p-[10px] text-center border-solid border-2 border-navactive-800'>
            결제하기
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default PlanManagment
