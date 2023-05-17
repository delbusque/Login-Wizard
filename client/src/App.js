import './App.css';
import LandingPage from './pages/landing-page/LandingPage';
import AuthPage from './pages/auth-page/AuthPage';
import VerifyMobile from './pages/verify-mobile/VerifyMobile';

function App() {
  return (
    <>
      <VerifyMobile />
      <AuthPage />
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
