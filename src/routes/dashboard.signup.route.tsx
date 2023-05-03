import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from '../components/common/contentwrapper/homewrapper'
import DashNavBar from '../components/common/header/dashboardheader'
import SignUpSiderBar from '../components/common/sidebar/signup.sidebar'
import BasicInformation from '../components/utils/signup/basicInfo'

const SignUpDashboardRoute: FC = (): ReactElement => {
  return (
    <Layout className='h-[100%] bg-white w-full'>
      <div className='h-[100%] bg-white w-full'>
        <div className='fixed w-full border-b-2 border-navactive-500'>
          <DashNavBar />
        </div>
        <div className='mt-[50px] w-full '>
          <SignUpSiderBar />
          <div className='lg:w-[calc(100%-300px)] w-full lg:mt-[50px] mt-[20px]  fixed right-0  h-[100%]'>
            <ContentWrapper>
              <Routes>
                <Route path='/' element={<BasicInformation />} />
                <Route path='/vt' element={<BasicInformation />} />
              </Routes>
            </ContentWrapper>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignUpDashboardRoute
