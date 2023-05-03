import { Route, Routes } from 'react-router-dom'
import HomeRoutes from './routes/home.route'
import SignUpDashboardRoute from './routes/dashboard.signup.route'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomeRoutes />} />
      <Route path='/sd/*' element={<SignUpDashboardRoute />} />
    </Routes>
  )
}

export default App
