import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Auth from './components/Singup/Singup';
import Notice from './pages/Notice/Notice';
import Home from './pages/Home/Home';
import Button from './components/Navbar/Button';

import CrInfo from './pages/CrInfo/CrInfo';

function App() {
  return (
    <div>
   
  
        < Navbar/>
        {/* <Auth/> */}
        {/* <Link to='/'>Home</Link>
        <Link to='/notice'>Notice</Link> */}
     
        <Routes>
          <Route path='/' exact='true' element={<Home/>}/>
          <Route path='/notice' element={<Notice/>}/>
          <Route path='/singup' element={<Button/>}/>
          <Route path='/crinfo'element={<CrInfo/>}/>
        </Routes>

   </div>
  );
}


export default App;
