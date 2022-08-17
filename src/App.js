import LandingPage from './components/LandingPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './pages/home/HomeScreen';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/homescreen' element={<HomeScreen />} />
      {/* <Route path="/homescreen" exact component={Homescreen} /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
