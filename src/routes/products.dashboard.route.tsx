import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashNavBar from '../components/common/header/dashboardheader'
import ProductSiderBar from '../components/common/sidebar/products.sidebar'
import LiveProducts from '../components/dashboard/products/live.products'
import NewProduct from '../components/dashboard/products/new.product'
import VisitDuration from '../components/dashboard/products/visit-duration.product'
import ContentWrapper from '../components/common/contentwrapper/dashboardwrapper'

const { Content } = Layout

const ProductDashboard: FC = (): ReactElement => {
  return (
    <Layout className='h-screen bg-white'>
      <div className='border-b-2 border-navactive bg-white h-16 p-2'>
        <DashNavBar />
      </div>
      <Layout style={{ overflow: 'hidden', backgroundColor: 'white' }}>
        <ProductSiderBar />
        <Content
          style={{ overflow: 'auto', height: '100%' }}
          className='mt-[30px] custom-scrollbar'
        >
          <ContentWrapper>
            <Routes>
              <Route path='/' element={<LiveProducts />} />
              <Route path='/new' element={<NewProduct />} />
              <Route path='/visit-duration' element={<VisitDuration />} />
            </Routes>
          </ContentWrapper>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProductDashboard
