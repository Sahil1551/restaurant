import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Events from './components/Events';
import About from './components/About';
import Home from './components/Home';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/About" element={<About/>} />
        
      </Routes>
    </Router>
  )
}

export default App
