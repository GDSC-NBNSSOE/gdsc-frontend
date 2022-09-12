import './App.css';
import { Route, Routes } from 'react-router-dom';
import Initial from './pages/initial';
import Home from './pages/home';

const base = "gdsc-frontend";
export const endpoints = {
  initial:`${base}/`,
  home:`${base}/home/`,
}

function App() {
  return (
    <>
        
        <Routes>

            <Route path={endpoints.initial} element={<Initial/>}/>
            
            <Route path={endpoints.home} element={<Home/>}/>
        </Routes>
  </>
  );
}

export default App;