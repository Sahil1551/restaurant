import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Booking from './components/Booking';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
       <Navbar toggleModal={toggleModal} />
      <Booking isOpen={isOpen} toggleModal={toggleModal} />
      <Routes>
        <Route path="/"  element={<Home toggleModal={toggleModal} />} />
        <Route path="/Contact" element={<Contact/>} />

        <Route path="/About" element={<About/>} />
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
