import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/auth/login/login'
import SignUpPage from '../components/auth/signup/signup'
import ContentWrapper from '../components/common/contentwrapper/homewrapper'
import HomeNavBar from '../components/common/header/homeheader'
import HomePage from '../components/home/home'
import PublicProduct from '../components/home/product.public'
import QaPage from '../components/home/Qa.page'

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
            <Route path='/product/:id' element={<PublicProduct />} />
            <Route path='/qa' element={<QaPage />} />
          </Routes>
        </ContentWrapper>
      </div>
    </Layout>
  )
}

export default HomeRoutes
