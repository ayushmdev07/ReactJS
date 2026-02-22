import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Nav from './assets/Pages/Nav';
import Product from './assets/Pages/Product';
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App