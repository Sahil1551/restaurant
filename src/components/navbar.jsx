import React, { useState } from 'react'
import Logo from '/Logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = ({ toggleModal })=> {
  const [isOpen, setIsOpen] = useState(false)
  const click=()=>{
    window.location.href='/';
  }
  return (
    <div className="w-full flex justify-between items-center px-8 bg-white">
      {/* Logo */}
      <div className="w-[198px]">
        <img src={Logo} onClick={click} className="w-full cursor-pointer" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-xl text-gray-800">
        <Link to="/About" className="hover:text-red-500 transition duration-300">About</Link>
        <Link to="/Contact" className="hover:text-red-500 transition duration-300">Contact</Link>
      </div>

      {/* Book a Table Button */}
      <div className="hidden md:block">
        
<button 
          onClick={toggleModal} className="bg-[rgba(189,53,51,1)] text-white px-6 py-2 rounded-tl-lg rounded-br-lg shadow-md hover:bg-blue-600 transition duration-300">
          Book a table
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden w-full bg-white ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 py-4 shadow-lg`}>
        <div className="flex justify-end px-4">
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="text-gray-800 text-3xl">
            &times;
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-4 text-lg text-gray-800">
          <Link to="/About" className="hover:text-red-500 transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Contact" className="hover:text-red-500 transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        
        <div className="text-center mt-6">
        <button
          onClick={toggleModal}
          className="bg-[rgba(189,53,51,1)] text-white px-6 py-2 rounded-tl-lg rounded-br-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Book a Table
        </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
