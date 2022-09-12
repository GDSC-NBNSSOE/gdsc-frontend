import './App.css';
import { Route, Routes } from 'react-router-dom';
import Initial from './pages/initial';
import Home from './pages/home';

function App() {
  return (
        <Routes>

            <Route path="/" element={<Initial/>}/>
            <Route path="/home" element={<Home/>}/>

        </Routes>
  );
}

export default App;
