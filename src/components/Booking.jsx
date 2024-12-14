import axios from 'axios'
import React, { useState, useEffect } from 'react';

const Booking = ({ isOpen, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  // Disable scrolling on body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formattedDate = formData.date.split('-').reverse().join('-'); // Convert date to YYYY-MM-DD format
    
    try {
      // Sending the POST request
      const response = await axios.post('https://restaurant-backend-theta.vercel.app/api/book', {
        name: formData.name,
        email: formData.email,
        date: formattedDate, // Ensure the date is in YYYY-MM-DD format
        time: formData.time,
        guests: parseInt(formData.guests), // Convert guests to an integer
      });
  
      if (response.status === 201) {
        alert('Booking submitted successfully!');
        // Optionally, reset the form
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          guests: '',
        });
        toggleModal(); // Close the modal after submission
      } else {
        alert('Error submitting booking');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the booking');
    }
    
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md text-gray-700 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              &#x2715;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Book a Table</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-left font-medium text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-left font-medium text-gray-600 mb-2">
                  Date
                </label>
                <input
                  type="text" // Change this to "text" to accept DD-MM-YYYY format from the user
                  id="date"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-left font-medium text-gray-600 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-left font-medium text-gray-600 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  placeholder="Number of Guests"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
