import './App.css';
import LandingPage from './pages/landing-page/LandingPage';
import AuthPage from './pages/auth-page/AuthPage';
import VerifyMobile from './pages/verify-mobile/VerifyMobile';
import VerifyEmail from './pages/verify-email/VerifyEmail';
import VerificationSuccess from './pages/verification-success/VerificationSuccess';

function App() {
  return (
    <>
      <VerificationSuccess />
      <VerifyEmail />
      <VerifyMobile />
      <AuthPage />
      <LandingPage />
    </>
  );
}

export default App;
