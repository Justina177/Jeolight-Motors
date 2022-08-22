import LandingPage from './components/LandingPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './pages/screen/HomeScreen';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import CarScreen from './pages/screen/CarScreen';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/car/:slug" element={<CarScreen />} />
      <Route path='/Homescreen' element={<HomeScreen />} />
      <Route path='/login/Login' element={<Login />} />
      <Route path='/signup/Signup' element={<SignUp />} />
      {/* <Route path="/homescreen" exact component={Homescreen} /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
