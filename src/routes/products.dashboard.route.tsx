import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import ContentWrapper from '../components/common/contentwrapper/dashboardwrapper'
import DashNavBar from '../components/common/header/dashboardheader'
import ProductSiderBar from '../components/common/sidebar/products.sidebar'
import FinishedAppointment from '../components/dashboard/products/finished.product'
import LiveProducts from '../components/dashboard/products/live.products'
import NewProduct from '../components/dashboard/products/new.product'

import UvProduct from '../components/dashboard/products/visit/uv.product'
import VisitDuration from '../components/dashboard/products/visit/visit-duration.product'
import VisitTimePeriod from '../components/dashboard/products/visit/visit-period.product'
import InflowStatus from '../components/dashboard/products/inflow/inflowstatus.product'

const { Content } = Layout

const ProductDashboard: FC = (): ReactElement => {
  const isfinishedRoute = useMatch('/pr/finished')
  const isNewProduct = useMatch('/pr/new')
  return (
    <Layout className='h-screen bg-white'>
      <div className='border-b-2 border-navactive bg-white h-16 p-2'>
        <DashNavBar />
      </div>
      <Layout style={{ overflow: 'hidden', backgroundColor: 'white' }}>
        <ProductSiderBar />
        <Content
          style={{ overflow: 'auto', height: '100%' }}
          className={` custom-scrollbar ${
            isfinishedRoute || isNewProduct ? 'mt-0' : 'mt-[30px]'
          }`}
        >
          <ContentWrapper>
            <Routes>
              <Route path='/' element={<LiveProducts />} />
              <Route path='/new' element={<NewProduct />} />
              <Route path='/finished' element={<FinishedAppointment />} />
              <Route path='/visit-duration' element={<VisitDuration />} />
              <Route path='/uv' element={<UvProduct />} />
              <Route path='/visit-period' element={<VisitTimePeriod />} />
              <Route path='/inflow-status' element={<InflowStatus />} />
            </Routes>
          </ContentWrapper>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProductDashboard
