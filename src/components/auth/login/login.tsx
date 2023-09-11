/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGoogleLogin } from '@react-oauth/google'
import { Layout, notification } from 'antd'
import { FC, ReactElement, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import kakao from '../../../assets/images/kakao.png'
import {
  googleAuthSlice,
  kakaoAuthSlice,
} from '../../../state/slices/auth.slice'

declare global {
  interface Window {
    Kakao: any
  }
}

const LoginPage: FC = (): ReactElement => {
  const navigate = useNavigate()

  function navigating(): void {
    navigate('/signup')
  }
  const apiKey = import.meta.env.VITE_API_KEY
  const API_KEY = `${apiKey}`

  const dispatch = useDispatch()
  // const { loading } = useSelector((state: RootState) => state.authState)

  useEffect(() => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      window.Kakao.init(API_KEY)
    }
    //eslint-disable-next-line
  }, [])

  function success() {
    notification.success({
      placement: 'top',
      message: <span className=' text-white'>'로그인 완료'</span>,
      duration: 5,
      key: 'success',
      style: {
        backgroundColor: 'black',
      },
    })
    setTimeout(() => {
      navigate('/sd')
    }, 5000)
  }

  function Error() {
    notification.error({
      placement: 'top',
      message: <span className=' text-red'>'오류가 발생했습니다'</span>,
      duration: 5,
      key: 'error',
      style: {},
    })
  }

  const loginWithKakao = (): void => {
    if (window.Kakao && window.Kakao.Auth) {
      window.Kakao.Auth.login({
        success: (res: any) => {
          const data: any = {
            access_token: res?.access_token,
            id_token: res?.id_token,
          }
          dispatch(kakaoAuthSlice({ data, success, Error }) as any)
        },
        fail: (err: unknown) => {
          console.log({ err })
        },
      })
    }
  }

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const data: any = {
        access_token: tokenResponse.access_token,
      }
      dispatch(googleAuthSlice({ data, success, Error }) as any)
    },
  })

  return (
    <Layout className='lg:mt-[50px] bg-white'>
      <div className='mx-auto lg:w-[80%] lg:p-[0px] p-[15px] flex flex-col w-full h-screen  lg:h-[100%] lg:items-center '>
        <div className='lg:text-center text-left mt-[50px] left-0 '>
          <div className='font-bold text-2xl'>로그인</div>
          <div className='font-medium text-sm text-black mt-[5px]'>
            Hello AR CMS에 오신 걸 환영합니다!
          </div>
        </div>
        <div className='lg:w-[25%] lg:mt-[40px] w-full absolute lg:relative bottom-[50px] lg:bottom-[0px] left-0 p-[10px] lg:p-[0px]'>
          {/* <div className='flex flex-row space-x-4  text-center items-center justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%] p-[10px] border-solid border-2 border-lgborder'>
            <img src={naver} alt='naver' />
            <p className='font-bold w-[120px]'>네이버로 로그인</p>
          </div> */}
          <div
            className='flex flex-row space-x-4 items-center text-center justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%] p-[10px] border-solid border-2 border-lgborder hover:cursor-pointer'
            onClick={() => loginWithKakao()}
          >
            <img src={kakao} alt='kakao' />
            <p className='font-bold w-[120px]'>카카오로 로그인</p>
          </div>
          <div
            className='flex flex-row space-x-4 items-center text-center justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%] p-[10px] border-solid border-2 border-lgborder hover:cursor-pointer'
            onClick={() => login()}
          >
            <FcGoogle size={20} />
            <p className='font-bold w-[120px]'>구글로 로그인</p>
          </div>
          {/* <div className='flex flex-row space-x-4 items-center text-center justify-center lg:m-[15px] mb-[8px] lg:mb-[0px] w-[100%] p-[10px] border-solid border-2 border-lgborder'>
            <FaFacebookF size={20} color='blue' />
            <p className='font-bold w-[120px]'>페이스북으로 로그인</p>
          </div> */}
        </div>
        <div className='lg:mt-[20px] flex flex-row  w-[90%] justify-center  absolute bottom-[20px] lg:bottom-[0px] lg:relative '>
          <p className='font-medium text-sm text-black  text-center'>
            아직 회원이 아니신가요?
          </p>
          <p
            className='pl-[15px] font-medium text-sm text-hblue hover:cursor-pointer'
            onClick={() => navigating()}
          >
            회원 가입
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage
