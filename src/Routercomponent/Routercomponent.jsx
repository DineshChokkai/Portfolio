import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from '../components/contact/Contact';
import Homefolio from '../pages/Homefolio';
import Navbar from '../components/navbar/Navbar';
import About from '../components/about/About';


const Routercomponent = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path ="/sidebar" element={<Sidebar/>}  /> */}
        <Route path ="/" element={<Homefolio/>}  />
        <Route path ="/contact" element={<Contact/>}  />
        <Route path ="/nav" element={<Navbar/>}  />
        <Route path ="/about" element={<About/>}  />
    </Routes>
</BrowserRouter>  )
}

export default Routercomponent