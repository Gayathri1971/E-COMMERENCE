import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Mobile from './Componets/Mobile';
import Tv from './Componets/Tv';
import Laptop from './Componets/Laptop';
import Printer from './Componets/Printer';
import Tablets from './Componets/Tablets';
import Home from './Componets/Home'; 
import Welcome from './Componets/Welcome'; 
import ProductDetail from './Componets/ProductDetail';
import TvDetails from './Componets/TvDetails';
import LaptopDetails from './Componets/LaptopDetails';
import TabletsDetails from './Componets/TabletsDetails'
import PrinterDetails from './Componets/PrinterDetails'

function App() {
  return (
    <>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Welcome />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Laptop" element={<Laptop />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/Printer" element={<Printer />} />
        <Route path="/mobile/:id" element={<ProductDetail />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/laptop/:id" element={<LaptopDetails />} />
        <Route path='/tablet/:id' element={<TabletsDetails />} />
        <Route path='/printer/:id' element={<PrinterDetails />} />
      </Routes>
    </>
  );
}

export default App;
