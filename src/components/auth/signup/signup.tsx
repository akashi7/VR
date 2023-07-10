import { Layout } from 'antd'
import { FC, ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import naver from '../../../assets/images/Logo_Naver_24.png'
import facebook from '../../../assets/images/facebook.png'
import google from '../../../assets/images/google.png'
import kakao from '../../../assets/images/kakao.png'
// import { setToLocal } from '../../../helpers/handleLocalStorage'
// import { kakaoAuthSlice } from '../../../state/slices/auth.slice'
// import { useDispatch } from 'react-redux'
// import { RootState } from '../../../state'
// import { useSelector } from 'react-redux'
declare global {
  interface Window {
    Kakao: any
  }
}

const SignUpPage: FC = (): ReactElement => {
  const navigate = useNavigate()

  function navigating(): void {
    navigate('/login')
  }

  const apiKey = import.meta.env.VITE_API_KEY
  const API_KEY = `${apiKey}`

  // const dispatch = useDispatch()
  // const { loading } = useSelector((state: RootState) => state.authState)

  useEffect(() => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      window.Kakao.init(API_KEY || '5292aa5fdc408f4b4f6582029f5febae')
    }
    //eslint-disable-next-line
  }, [])

  const loginWithKakao = (): void => {
    if (window.Kakao && window.Kakao.Auth) {
      window.Kakao.Auth.login({
        success: (res: unknown) => {
          console.log({ res })
          // window.Kakao.API.request({
          //   url: '/v2/user/me',
          // })
          //   .then(function (res: unknown) {
          //     console.log({ res })
          //     // setToLocal('user', res)
          //     // navigate('/sd/')
          //   })
          //   .catch(function (err: unknown) {
          //     console.log({ err })
          //   })
        },
        fail: (err: unknown) => {
          console.log({ err })
        },
      })
    } else {
      console.error(
        'Kakao SDK is not initialized or Auth module is unavailable.'
      )
    }
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
          <div
            className='flex flex-row items-center  justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%]  p-[10px] border-solid border-2 border-lgborder hover:cursor-pointer'
            onClick={() => loginWithKakao()}
          >
            <img src={kakao} alt='kakao' />
            <p className='pl-[10px] font-bold'>카카오로 가입</p>
          </div>
          <div className='flex flex-row items-center  justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%]  p-[10px] border-solid border-2 border-lgborder'>
            <img
              src={google}
              alt='google'
              className='md:w-[3%] w-[4%] xl:w-[4%] '
            />
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
