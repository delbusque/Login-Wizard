import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUserContext } from './hooks/useUserContext';
import LandingPage from './pages/landing-page/LandingPage';
import AuthPage from './pages/auth-page/AuthPage';
import VerifyMobile from './pages/verify-mobile/VerifyMobile';
import VerifyEmail from './pages/verify-email/VerifyEmail';
import VerificationSuccess from './pages/verification-success/VerificationSuccess';

function App() {
  // const user = JSON.parse(localStorage.getItem('user'));
  const { user } = useUserContext();
  console.log(user);

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/verify-mobile' element={<VerifyMobile />} />
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/success' element={user ? <VerificationSuccess /> : <Navigate to='/' />} />
    </Routes>
  );
}

export default App;