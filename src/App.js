import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { OnboardingRoute } from './page/onboarding/Onboarding.nav';
import Onboarding from './page/onboarding/Onboarding';
import { ProblemRoute } from './page/problem/Problem.nav';
import { Problem } from './page/problem/Problem';
import { Provider } from 'react-redux';
import store from './reducer/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <Routes>
          <Route path={OnboardingRoute} element={<Onboarding/>} />
          <Route path={ProblemRoute} element={<Problem/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
