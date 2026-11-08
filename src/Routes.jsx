import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from '../Frontend'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/Auth'

const ProtectedRoute = ({ children }) => {
  const { isAuth, isAppLoading } = useAuth();

  if (isAppLoading) return null;

  return isAuth ? children : <Navigate to="/auth/login" replace />;
};

const Index = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/auth/*" element={isAuth ? <Navigate to="/dashboard" replace /> : <Auth />} />
      <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/*" element={<Frontend />} />
    </Routes>
  )
}

export default Index