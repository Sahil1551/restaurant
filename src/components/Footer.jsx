import React from 'react'
import Logo from '/Logo.jpeg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="footer">
<footer className="bg-gray-100 py-10">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
    {/* Left Section */}
    <div className="text-center md:text-left md:w-1/4">
      <div className="flex justify-center md:justify-start items-center mb-4">
        <img
          src={Logo}
          alt="Restaurant Logo"
          className="w-[120px] h-[120px]"
        />
      </div>
    </div>

    {/* Navigation Section */}
    <div className="text-center md:text-left md:w-1/4">
      <h3 className="font-semibold text-gray-700 mb-2">NAVIGATION</h3>
      <ul className="text-sm cursor-pointer flex flex-col items-center md:items-start text-gray-500 space-y-1">
        <li>
          <Link href="#">Menu</Link>
        </li>
        <li>
          <Link href="#">About us</Link>
        </li>
        <li>
          <Link href="#">Contact us</Link>
        </li>
        <li>
          <Link href="#">Main dishes</Link>
        </li>
      </ul>
    </div>

    {/* Dishes Section */}
    <div className="text-center md:text-left md:w-1/4">
      <h3 className="font-semibold text-gray-700 mb-2">DISHES</h3>
      <ul className="text-sm flex flex-col items-center md:items-start text-gray-500 space-y-1">
        <li>Fish & Viggies</li>
        <li>Tofu Chili</li>
        <li>Egg & Cocumber</li>
        <li>Lumpia w/Sauce</li>
      </ul>
    </div>

    {/* Follow Us Section */}
    <div className="text-center md:w-1/4">
      <h3 className="font-semibold text-gray-700 mb-2">FOLLOW US</h3>
      <div className="flex justify-center space-x-4">
        <a href="#" className="fab fa-facebook text-xl text-gray-500 hover:text-blue-600"></a>
        <a href="#" className="fab fa-twitter text-xl text-gray-500 hover:text-blue-400"></a>
        <a href="#" className="fab fa-instagram text-xl text-gray-500 hover:text-pink-500"></a>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
    <div>© 2022 Restaurants. All Right Reserved. Designed by Isaac</div>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="#terms" className="hover:underline">
        Terms of Service
      </a>
      <a href="#privacy" className="hover:underline">
        Privacy Policy
      </a>
    </div>
  </div>
</footer>

</div>

    </div>
  )
}

export default Footer
