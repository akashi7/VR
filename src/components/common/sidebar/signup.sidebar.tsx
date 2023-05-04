import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Link, useMatch } from 'react-router-dom'

const SignUpSiderBar: FC = (): ReactElement => {
  const basicInfoMatch = useMatch('/sd/')
  const planMatch = useMatch('/sd/plan')

  return (
    <Layout.Content className='lg:fixed lg:w-[300px] hidden lg:block w-0 border-t-2 border-r-2 border-navactive  h-[100%] bg-white'>
      <div className='p-[10px] mt-[15px]'>
        <h1 className='font-semibold lg:text-xl text-black'>마이 페이지</h1>
      </div>
      <div className='flex flex-col'>
        <Link
          to={'/sd/'}
          className={
            basicInfoMatch
              ? 'bg-navactive text-black p-[10px] font-semibold hover:text-black'
              : 'bg-white p-[10px] hover:text-black  font-semibold'
          }
        >
          기본 정보
        </Link>
        <Link
          to={'/sd/plan'}
          className={
            planMatch
              ? 'bg-navactive text-black p-[10px] hover:text-black font-semibold'
              : 'bg-white p-[10px] hover:text-black font-semibold'
          }
        >
          {' '}
          요금제 관리{' '}
        </Link>
      </div>
    </Layout.Content>
  )
}

export default SignUpSiderBar
