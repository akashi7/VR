import { Layout } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { CheckBox } from '../../common/input'
import { getFromLocal } from '../../helpers/handleLocalStorage'
import { GlobalModel } from '../../modals'

const BasicInformation: FC = (): ReactElement => {
  const basicInfoMatch = useMatch('/sd/')
  const planMatch = useMatch('/sd/plan')
  const navigate = useNavigate()
  const [Withdrawal, setWithDrawal] = useState(false)

  function ToogleDrawer(): void {
    setWithDrawal(!Withdrawal)
  }

  const data = getFromLocal<any>('user')

  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [toogle, setToogle] = useState<boolean>(false)

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked)
  }

  const Toogle = () => {
    setToogle(!toogle)
  }

  function DeleteContent() {
    return (
      <div>
        <p>Hello AR을 이용해 주셔서 감사합니다.</p>
        <div className='flex flex-row mt-5 items-center'>
          <div className='w-[45%]'>
            <button
              className='w-full rounded font-medium  text-sm p-[10px] text-center text-black bg-onOK'
              onClick={() => Toogle()}
            >
              취소
            </button>
          </div>
          <div className='w-[50%] pl-[15px]'>
            <button className='w-full font-medium rounded  text-sm p-[10px] text-center text-white bg-tred'>
              탈퇴
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout className='xl:p-[10px] p-[18px]  bg-white  '>
      <div className='mx-auto xl:w-[70%] md:w-[90%] w-full md:mt-[40px] mt-0 xl:mt-0 '>
        {Withdrawal ? (
          <>
            <div className='mb-[15px]'>
              <div className='font-bold text-2xl text-black'>회원 탈퇴 </div>
              <div className='text-tcolor font-medium mt-[10px]'>
                탈퇴하기 전에 확인해 주세요.
              </div>
            </div>
            <div className='border border-mycloror-100 mt-[50px] p-[15px] mb-[30px]'>
              <p>
                · 회원 탈퇴를 하시면 가입에 사용된 개인 정보는 모두 삭제되고
                복구할 수 없습니다.
              </p>
              <p>
                · 회원 탈퇴를 하시면 저장하셨던 모든 제품 파일 및 설정들이
                삭제되고 복구할 수 없습니다.
              </p>
            </div>
            <div className='flex flex-row items-center mb-[20px] mt-[20px]'>
              <CheckBox
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={`lg:h-4 lg:w-4 h-4 w-4 accent-black`}
              />
              <p className='pl-[10px]'>
                위 내용을 확인했고 Hello AR 계정을 삭제합니다.
              </p>
            </div>
            <div className='absolute lg:relative lg:bottom-0  bottom-7 w-[90%]'>
              <button
                className={`lg:w-fit w-full  ${
                  isChecked
                    ? 'bg-black text-white'
                    : 'bg-mybcc text-mycloror border-solid border-2 border-navactive-800'
                } font-medium  text-sm p-[10px] text-center `}
                disabled={!isChecked}
                onClick={() => Toogle()}
              >
                요금제 보기
              </button>
            </div>
            {toogle && (
              <GlobalModel
                toogle={toogle}
                Toogle={Toogle}
                title='계정 삭제 및 회원 탈퇴합니다.'
                width={400}
                Component={DeleteContent}
              />
            )}
          </>
        ) : (
          <>
            <div className='mb-[20px] xl:hidden block'>
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
            <div className='mb-[30px]  md:mt-[40px] '>
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
                <p className='font-thin text-sm mt-[5px]'>
                  {data?.kakao_account?.email}
                </p>
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
              <p
                className='text-tred hover:cursor-pointer'
                onClick={() => ToogleDrawer()}
              >
                회원 탈퇴
              </p>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default BasicInformation
