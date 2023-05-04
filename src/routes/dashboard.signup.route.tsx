import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from '../components/common/contentwrapper/homewrapper'
import DashNavBar from '../components/common/header/dashboardheader'
import SignUpSiderBar from '../components/common/sidebar/signup.sidebar'
import BasicInformation from '../components/utils/signup/basicInfo'
import PlanManagment from '../components/utils/signup/planmanagement'

const SignUpDashboardRoute: FC = (): ReactElement => {
  return (
    <Layout className='h-[100%] bg-white w-full'>
      <div className='h-[100%]  bg-white w-full'>
        <div className='fixed w-full top-0 border-b-2 border-navactive'>
          <DashNavBar />
        </div>
        <div className='mt-[50px] w-full h-full '>
          <SignUpSiderBar />
          <div className='lg:w-[calc(100%-300px)] w-full lg:mt-[50px] mt-[70px]  lg:fixed right-0 h-full '>
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

export default SignUpDashboardRoute
