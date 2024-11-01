import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProducDetail from './pages/Productdetail';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
  
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/products' element={<ProductList />}/>
            <Route path='/products/:id' element={<ProducDetail />}/>
        
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}


