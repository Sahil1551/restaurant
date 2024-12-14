import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle input change
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

    try {
      const response = await axios.post('https://restaurant-backend-theta.vercel.app/api/contact', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (response.status === 201 || response.status === 200) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center text-center bg-gray-100 p-8">
      <div className="text-5xl font-serif italic m-6 text-gray-800">
        CONTACT US
      </div>
      <div className="w-3/4 max-w-4xl p-6 bg-white rounded-lg shadow-md overflow-auto h-auto text-gray-700 leading-relaxed">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-left font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left font-medium text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Submit
          </button>
        </form>

        {/* Display status message */}
        {statusMessage && (
          <div className="mt-4 text-sm text-gray-600">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
