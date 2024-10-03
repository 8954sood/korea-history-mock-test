import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { OnboardingRoute } from './page/onboarding/Onboarding.nav';
import Onboarding from './page/onboarding/Onboarding';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
        
          <Route path={OnboardingRoute} element={Onboarding()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
