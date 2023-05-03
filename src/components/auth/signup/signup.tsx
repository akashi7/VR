import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import naver from '../../../assets/images/Logo_Naver_24.png'
import facebook from '../../../assets/images/facebook.png'
import google from '../../../assets/images/google.png'
import kakao from '../../../assets/images/kakao.png'
import { useNavigate } from 'react-router-dom'

const SignUpPage: FC = (): ReactElement => {
  const navigate = useNavigate()

  function navigating(): void {
    navigate('/login')
  }

  return (
    <Layout className='lg:mt-[50px] bg-white'>
      <div className='mx-auto lg:w-[80%] lg:p-[0px] p-[15px] flex flex-col w-full h-screen  lg:h-[100%] lg:items-center '>
        <div className='lg:text-center text-left mt-[50px] left-0 '>
          <div className='font-bold text-2xl'>회원 가입</div>
          <div className='font-medium text-sm text-black mt-[5px]'>
            아직 회원이 아니시라면 먼저 가입을 부탁드려요.
          </div>
        </div>
        <div className=' lg:w-[25%] lg:mt-[40px] w-full absolute lg:relative bottom-[50px] lg:bottom-[0px]  left-0  p-[10px] lg:p-[0px]'>
          <div className='flex flex-row items-center justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%]  p-[10px] border-solid border-2 border-lgborder'>
            <img src={naver} alt='naver' />
            <p className='pl-[10px] font-bold'>네이버로 가입</p>
          </div>
          <div className='flex flex-row items-center  justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%]  p-[10px] border-solid border-2 border-lgborder'>
            <img src={kakao} alt='kakao' />
            <p className='pl-[10px] font-bold'>카카오로 가입</p>
          </div>
          <div className='flex flex-row items-center  justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%]  p-[10px] border-solid border-2 border-lgborder'>
            <img src={google} alt='google' className='lg:w-[4%] w-[7%] ' />
            <p className='pl-[10px] font-bold'>구글로 가입</p>
          </div>
          <div className='flex flex-row items-center  justify-center lg:m-[15px]  mb-[8px] lg:mb-[0px] w-[100%]  p-[10px] border-solid border-2 border-lgborder'>
            <img src={facebook} alt='facebook' />
            <p className='pl-[10px] font-bold'>페이스북으로 가입</p>
          </div>
        </div>
        <div className='lg:mt-[20px] flex flex-row  w-[90%] justify-center  absolute bottom-[20px] lg:bottom-[0px] lg:relative '>
          <p className='font-medium text-sm text-black  text-center'>
            이미 회원이신가요?
          </p>
          <p
            className='pl-[15px] font-medium text-sm text-hblue hover:cursor-pointer'
            onClick={() => navigating()}
          >
            로그인
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SignUpPage