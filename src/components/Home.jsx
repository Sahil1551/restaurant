import React from "react";
import pic from "/homepic1.webp";
import bgimg from '/bg_image.png'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useState,useEffect } from "react";
import fp1 from '/food_pic_1.webp'
import fp2 from '/food_pic_2.png' 
import phot from '/ProfilePhoto.jpg'
import { Link } from "react-router-dom";
const Home = ({ toggleModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality to change the review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const reviews = [
    {
      photo: `${phot}`, // Replace with actual photo paths
      name: 'Customer 1',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae, consectetur odit corporis non hic magni quam vero possimus pariatur.',
    },
    {
      photo: `${phot}`,
      name: 'Customer 2',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae, consectetur odit corporis non hic magni quam vero possimus pariatur.',
    },
    {
      photo: `${phot}`,
      name: 'Customer 3',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae, consectetur odit corporis non hic magni quam vero possimus pariatur.',
    },
    // Add more reviews here
  ];

  
  return (
    <div>
    <div  
    className=""
    style={{ 
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    > <div className="bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center justify-center bg-red-100 bg-opacity-80 p-6 md:p-10">
        {/* Text Section */}
        <div className="flex flex-col mt-10 md:mt-[136px] gap-8 md:gap-16 max-w-lg">
          {/* Heading */}
          <div className="text-4xl md:text-6xl font-serif text-left">
            We provide the <br /> best food for you
          </div>

          {/* Description */}
          <div className="text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid
            id fugiat similique nemo ad commodi rem, architecto velit quas libero
            repellendus tempore consequuntur repudiandae vel aliquam iure ipsum
            illo!
          </div>

          {/* Buttons */}
          <div className="flex gap-5">
            <button className="bg-blue-950 text-white px-6 py-3 rounded-tl-lg rounded-br-lg shadow-md hover:bg-blue-600 transition duration-300">
              Menu
            </button>
            <button
          onClick={toggleModal}
          className="bg-[rgba(189,53,51,1)] text-white px-6 py-2 rounded-tl-lg rounded-br-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Book a Table
        </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.587 0 0 .587 0 1.325v21.351C0 23.414.587 24 1.325 24h11.494v-9.294H9.692V10.24h3.127V7.875c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.506 0-1.796.717-1.796 1.765v2.313h3.591l-.467 3.466h-3.124V24h6.127c.738 0 1.325-.587 1.325-1.325V1.325C24 .587 23.414 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 text-white rounded-full hover:opacity-80 transition duration-300"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.507 5.507 0 0 1 22 7.5v9A5.507 5.507 0 0 1 16.5 22h-9A5.507 5.507 0 0 1 2 16.5v-9A5.507 5.507 0 0 1 7.5 2zm0-2A7.508 7.508 0 0 0 0 7.5v9A7.508 7.508 0 0 0 7.5 24h9A7.508 7.508 0 0 0 24 16.5v-9A7.508 7.508 0 0 0 16.5 0zm12.46 6.54a1.24 1.24 0 0 1-1.24 1.24 1.242 1.242 0 1 1 1.24-1.24zM12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0-2a6.7 6.7 0 1 1-6.7 6.7A6.7 6.7 0 0 1 12 5.3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition duration-300"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.643 4.937a9.555 9.555 0 0 1-2.828.775 4.959 4.959 0 0 0 2.163-2.723 9.718 9.718 0 0 1-3.127 1.196A4.918 4.918 0 0 0 16.616 3a4.92 4.92 0 0 0-4.917 4.918c0 .385.043.76.127 1.122A13.97 13.97 0 0 1 1.671 3.149a4.88 4.88 0 0 0-.664 2.473c0 1.705.87 3.207 2.188 4.092a4.902 4.902 0 0 1-2.228-.616v.061a4.93 4.93 0 0 0 3.946 4.827 4.936 4.936 0 0 1-2.224.084 4.928 4.928 0 0 0 4.604 3.421 9.864 9.864 0 0 1-6.115 2.105c-.397 0-.788-.023-1.175-.068a13.933 13.933 0 0 0 7.547 2.212c9.055 0 14.007-7.514 14.007-14.007 0-.214-.005-.426-.014-.637A10.057 10.057 0 0 0 24 4.557a9.555 9.555 0 0 1-2.357.645z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={pic}
            className="w-[300px] md:w-[700px] h-auto m-10 ml-0 md:ml-[126px] rounded-tl-[50px] rounded-br-[50px]"
            alt=""
          />
        </div>
      </div>
    </div>
    

    
    <div className="flex bg-gray-200 flex-col items-center gap-10">
  <div className="md:w-full sm:w-[480px] text-center mt-[92px] items-center text-5xl sm:text-6xl text-bold font-serif h-[65px]">
    Our Special Dishes
  </div>
  <div className="w-full sm:w-[376px] h-[65px] font-sans text-center sm:text-left">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere autem consequuntur doloribus.
  </div>

  <div className="flex flex-col sm:flex-row mt-[42px] gap-5 sm:gap-0">
    {Array(4).fill().map((_, index) => (
      <div key={index} className="w-full sm:w-[310px] h-[442px] cursor-pointer">
        <div className="w-[265px] mt-[70px] h-auto text-center flex flex-col border-2 border-white rounded-tl-[20px] rounded-br-[20px] p-4 relative group hover:bg-white transition-all duration-300">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <img className="rounded-full w-[207px] group-hover:w-[230px] transition-transform duration-300" src={fp1} alt="Lumpia with Sauce" />
            <div className="absolute top-9 -right-5 bg-black text-white text-sm font-bold px-2 py-3 rounded-full shadow-lg">
              $15
            </div>
          </div>
          <div className="mt-12 font-serif text-2xl">
            Lumpia with Sauce
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias nobis aliquid eos perspiciatis est dolores eaque, placeat vel laborum soluta impedit eius quidem voluptates facere, perferendis et fugiat excepturi.
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="flex  p-8 flex-col sm:flex-row items-center">
    <div className="w-full sm:w-[667px] sm:h-[667px] sm:rounded-3xl sm:mr-16">
      <img src={fp2} className="w-full rounded-3xl" alt="" />
    </div>
    <div className="flex flex-col  gap-20 md:gap-10 sm:ml-16 sm:w-[520px]">
      <div className="font-serif font-medium text-5xl sm:w-[520px] h-[130px]">
        Welcome to our Restaurant
      </div>
      <div className="sm:w-[376px] h-[115px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas commodi asperiores, possimus tempore numquam aliquam? Aliquam incidunt iste, odit autem soluta, excepturi delectus accusamus at tenetur iusto commodi quidem dignissimos?
      </div>
      <div className="flex  gap-5">
        <button className="bg-blue-950 text-white px-6 py-3 rounded-tl-lg rounded-br-lg shadow-md hover:bg-blue-600 transition duration-300">
          Menu
        </button>
        <button 
          onClick={toggleModal} className="bg-[rgba(189,53,51,1)] text-white px-6 py-3 rounded-tl-lg rounded-br-lg shadow-md hover:bg-red-700 transition duration-300">
          Book a Table
        </button>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col gap-5">
  <div className="flex text-5xl font-serif mt-[140px] justify-center flex-row text-center items-center">
    Our Happy Customer
  </div>
  <div className="flex justify-center text-center">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo recusandae quos{' '}
    <br />
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </div>
  <div className="relative flex items-center justify-center w-full h-[500px]">
    <div className="flex flex-col bg-white shadow-2xl rounded-tl-3xl rounded-br-3xl items-center w-[639px] h-auto relative">
      {/* Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={reviews[currentIndex].photo}
          alt="Customer"
          className="w-[100px] h-[100px] object-cover rounded-full border-2 border-white"
        />
      </div>

      {/* Stars */}
      <div className="text-center mt-14 text-3xl">
        <span className="text-yellow-500">
          {[...Array(reviews[currentIndex].rating)].map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </span>
      </div>

      {/* Description */}
      <div className="h-[155px] w-[383px] text-center mt-4">
        {reviews[currentIndex].description}
      </div>
    </div>

    {/* Dots for navigation */}
    <div className="absolute bottom-5 flex justify-center w-full">
      {reviews.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mx-2 rounded-full ${
            index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
          }`}
        ></div>
      ))}
    </div>
  </div>
</div>
    </div>
    

  );
};

export default Home;
