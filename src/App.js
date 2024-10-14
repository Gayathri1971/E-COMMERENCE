import './App.css';
import Navbar from './Componets/Navbar';
import { Route,Routes } from 'react-router-dom';
import Mobile from './Componets/Mobile';
import Tv from './Componets/Tv';
import Laptop from './Componets/Laptop';
import Printer from './Componets/Printer';
import Tablets from './Componets/Tablets';
import Home from './Componets/Home';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/Mobile' element={<Mobile/>}/>
    <Route path='/Tv' element={<Tv/>}/>
    <Route path='/Laptop' element={<Laptop />}/>
    <Route path='/Tablets' element={<Tablets/>}/>
    <Route path='/Printer' element={<Printer/>}/>
    
    </Routes>
    
    </>
  );
} 

export default App;
