import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from '../components/common/contentwrapper/homewrapper'
import DashNavBar from '../components/common/header/dashboardheader'
import SignUpSiderBar from '../components/common/sidebar/signup.sidebar'
import BasicInformation from '../components/dashboard/account/basicInfo'
import PlanManagment from '../components/dashboard/account/planmanagement'
import Private from './private'

const SignUpDashboardRoute: FC = (): ReactElement => {
  return (
    <Layout className='h-[100%] bg-white w-full'>
      <div className='h-[100%]  bg-white w-full'>
        <div className='fixed w-full bg-white  top-0 border-b-2 border-navactive h-16 p-2'>
          <DashNavBar />
        </div>
        <div className='mt-[50px] w-full h-full '>
          <SignUpSiderBar />
          <div className='xl:w-[calc(100%-300px)] w-full lg:mt-[50px] mt-[70px]   xl:fixed right-0 h-full '>
            <ContentWrapper>
              <Routes>
                <Route path='/' element={<BasicInformation />} />
                <Route path='/plan' element={<PlanManagment />} />
              </Routes>
            </ContentWrapper>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const PrivateSignUpDashboardRoute = Private(SignUpDashboardRoute)

export default PrivateSignUpDashboardRoute
