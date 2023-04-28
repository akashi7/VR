import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/auth/login/login'
import ContentWrapper from '../components/common/contentwrapper/homewrapper'
import HomeNavBar from '../components/common/header/homeheader'
import HomePage from '../components/home'

const HomeRoutes: FC = (): ReactElement => {
  return (
    <Layout className='h-[100%] bg-white'>
      <div className='h-[100%] bg-white'>
        <div className='fixed w-full '>
          <HomeNavBar />
        </div>
        <ContentWrapper>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </ContentWrapper>
      </div>
    </Layout>
  )
}

export default HomeRoutes
