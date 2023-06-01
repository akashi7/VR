import { Route, Routes } from 'react-router-dom'
import HomeRoutes from './routes/home.route'
import SignUpDashboardRoute from './routes/dashboard.route'
import ProductDashboard from './routes/products.dashboard.route'
import NewProduct from './components/dashboard/products/new.product'
import FinishedAppointment from './components/dashboard/products/finished.product'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomeRoutes />} />
      <Route path='/sd/*' element={<SignUpDashboardRoute />} />
      <Route path='/pr/*' element={<ProductDashboard />} />
      <Route path='/new' element={<NewProduct />} />
      <Route path='/finished' element={<FinishedAppointment />} />
    </Routes>
  )
}

export default App
