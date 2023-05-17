import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page/LandingPage';
import AuthPage from './pages/auth-page/AuthPage';
import VerifyMobile from './pages/verify-mobile/VerifyMobile';
import VerifyEmail from './pages/verify-email/VerifyEmail';
import VerificationSuccess from './pages/verification-success/VerificationSuccess';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/verify-mobile' element={<VerifyMobile />} />
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/success' element={<VerificationSuccess />} />
    </Routes>
  );
}

export default App;
