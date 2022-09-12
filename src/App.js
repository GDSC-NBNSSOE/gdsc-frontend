import './App.css';
import { Route, Routes } from 'react-router-dom';
import Initial from './pages/initial';
import Home from './pages/home';

const siteIndex = "gdsc-frontend/";

function App() {
  return (
        <Routes>

            <Route path={`${siteIndex}/`} element={<Initial/>}/>
            <Route path={`${siteIndex}/home`} element={<Home/>}/>

        </Routes>
  );
}

export default App;
