/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
import { Layout, notification } from 'antd'
import { FC, ReactElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { RootState } from '../../../state'
import { createPlanApi } from '../../../state/slices/services.slice'
import { GlobalModel } from '../../modals'
import Plans from '../common/account/plans'

const PlanManagment: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const basicInfoMatch = useMatch('/sd/')
  const planMatch = useMatch('/sd/plan')
  const navigate = useNavigate()
  const [toogle, setToogle] = useState<boolean>(false)
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(
    null
  )
  const handleCheckboxChange = (value: number) => {
    setSelectedPlanIndex(value === selectedPlanIndex ? null : value)
  }
  const handlePlanSelect = (index: number) => {
    setSelectedPlanIndex(index)
  }
  const Toogle = () => {
    setToogle(!toogle)
  }

  const { planData } = useSelector((state: RootState) => state.service)

  function Error() {
    notification.error({
      placement: 'top',
      message: <span className=' text-red'>'오류가 발생했습니다'</span>,
      duration: 3,
      key: 'error',
      style: {},
    })
  }

  function success() {
    navigate('/sd/')
  }

  const handleDispatch = () => {
    dispatch(
      createPlanApi({
        data: { plan_id: selectedPlanIndex },
        Error,
        success,
      }) as any
    )
  }

  function PayContent() {
    return (
      <div>
        <p>“네" 버튼을 클릭하시면 결제창으로 이동합니다.</p>
        <div className='flex flex-row mt-5 items-center'>
          <div className='w-[45%]'>
            <button
              className='w-full rounded font-medium  text-sm p-[10px] text-center text-black bg-onOK'
              onClick={() => Toogle()}
            >
              아니오
            </button>
          </div>
          <div className='w-[50%] pl-[15px]'>
            <button
              className='w-full font-medium rounded  text-sm p-[10px] text-center text-white bg-black'
              onClick={handleDispatch}
            >
              네
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout className='xl:p-[10px] p-[18px] md:p-[20px]  bg-white h-full lg:h-screen'>
      <div className='mx-auto md:w-[100%] xl:w-[85%] '>
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
            <button
              className={`lg:w-fit w-full hidden lg:block ${
                selectedPlanIndex
                  ? 'bg-black text-white'
                  : 'bg-mybcc text-mycloror'
              } font-medium  text-sm p-[10px] text-center `}
              disabled={!selectedPlanIndex}
              onClick={() => Toogle()}
            >
              결제하기
            </button>
          </div>
        </div>
        <div className='mt-[20px] lg:mt-[40px] xl:grid  xl:grid-cols-4 xl:gap-5 xl:h-[600px]'>
          <Plans
            handleCheckboxChange={() => handleCheckboxChange(1)}
            titles={[
              '기본 요금제',
              '가장 기본 요금제 입니다.',
              '월 / 30,000원 ',
              '라이브 제품 20개 등록 가능',
              '대기중인 제품 20개 등록 가능 ',
              '제품 상세 옵션 파일 업로드 가능',
              'AR 애널리틱스 이용 가능',
            ]}
            selectedPlanIndex={selectedPlanIndex}
            handlePlanSelect={handlePlanSelect}
            index={1}
            planData={planData}
          />
          <Plans
            handleCheckboxChange={() => handleCheckboxChange(2)}
            titles={[
              '레벨 2 요금제',
              '레벨 2 요금제 입니다.',
              '월 / 60,000원',
              '라이브 제품 20개 등록 가능',
              '대기중인 제품 20개 등록 가능',
              '제품 상세 옵션 파일 업로드 가능',
              'AR 애널리틱스 이용 가능',
            ]}
            selectedPlanIndex={selectedPlanIndex}
            handlePlanSelect={handlePlanSelect}
            index={2}
            planData={planData}
          />
          <Plans
            handleCheckboxChange={() => handleCheckboxChange(3)}
            titles={[
              '레벨 3 요금제',
              '레벨 3 요금제 입니다.',
              '월 / 90,000원',
              '라이브 제품 20개 등록 가능',
              '대기중인 제품 20개 등록 가능',
              ' 제품 상세 옵션 파일 업로드 가능',
              'AR 애널리틱스 이용 가능',
            ]}
            selectedPlanIndex={selectedPlanIndex}
            handlePlanSelect={handlePlanSelect}
            index={3}
            planData={planData}
          />
          <Plans
            handleCheckboxChange={() => handleCheckboxChange(4)}
            titles={[
              '프리미엄 요금제',
              '프리미엄 요금제 입니다.',
              '월 / 100,000원',
              '라이브 제품 20개 등록 가능',
              '대기중인 제품 20개 등록 가능',
              '제품 상세 옵션 파일 업로드 가능',
              'AR 애널리틱스 이용 가능',
            ]}
            selectedPlanIndex={selectedPlanIndex}
            handlePlanSelect={handlePlanSelect}
            index={4}
            planData={planData}
          />
        </div>
        {toogle && (
          <GlobalModel
            toogle={toogle}
            Toogle={Toogle}
            title='선택하신 요금제로 결제하시겠어요?'
            width={400}
            Component={PayContent}
          />
        )}
        <div>
          <button
            className={`w-full block xl:hidden ${
              selectedPlanIndex
                ? 'bg-black text-white'
                : 'bg-mybcc text-mycloror border-solid border-2 border-navactive-800'
            } font-medium  text-sm p-[10px] text-center `}
            onClick={() => Toogle()}
            disabled={!selectedPlanIndex}
          >
            결제하기
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default PlanManagment
