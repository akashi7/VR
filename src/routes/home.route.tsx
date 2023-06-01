import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/auth/login/login'
import ContentWrapper from '../components/common/contentwrapper/homewrapper'
import HomeNavBar from '../components/common/header/homeheader'
import HomePage from '../components/home'
import SignUpPage from '../components/auth/signup/signup'

const HomeRoutes: FC = (): ReactElement => {
  return (
    <Layout className='h-[100%] bg-white'>
      <div className='h-[100%] bg-white'>
        <div className='fixed w-full border-b-2 border-navactive z-5'>
          <HomeNavBar />
        </div>
        <ContentWrapper>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </ContentWrapper>
      </div>
    </Layout>
  )
}

export default HomeRoutes
