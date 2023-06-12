import { Route, Routes } from 'react-router-dom'
import SignUpDashboardRoute from './routes/dashboard.route'
import HomeRoutes from './routes/home.route'
import ProductDashboard from './routes/products.dashboard.route'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomeRoutes />} />
      <Route path='/sd/*' element={<SignUpDashboardRoute />} />
      <Route path='/pr/*' element={<ProductDashboard />} />
    </Routes>
  )
}

export default App
