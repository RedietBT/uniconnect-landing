// src/components/ContactUs.jsx
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/contact-us.json'; // Ensure this path is correct

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // Show success message for 5 seconds
    }
  };

  return (
    <section className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center bg-[#f5f5fa]" id="contact-us">
      {/* Left Side: Lottie Animation */}
      <div className="flex-1 max-w-lg mx-auto mb-10 lg:mb-0 lg:mr-10">
        <Lottie animationData={contactAnimation} style={{ width: '350px', height: '350px' }} />
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 max-w-lg mx-auto text-center lg:text-left">
        <h2 className="text-4xl font-bold text-[#5e208f] mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">We’d love to hear from you! Please fill out the form below.</p>
        
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg transition duration-300 ease-in-out">
            🎉 Thank you for your message! We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-500 transform hover:scale-105">
          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-2 p-3 border rounded-lg w-full ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#5e208f] focus:outline-none transition duration-300 ease-in-out`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-2 p-3 border rounded-lg w-full ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#5e208f] focus:outline-none transition duration-300 ease-in-out`}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 text-lg font-semibold" htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 p-3 border rounded-lg w-full ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#5e208f] focus:outline-none transition duration-300 ease-in-out`}
              placeholder="Your Message"
              rows="5"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5e208f] text-white py-3 rounded-lg hover:bg-[#440f69] transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
