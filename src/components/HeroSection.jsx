import React, { useState } from 'react';
import BackgroundImage from '../assets/cambridge.avif';
import RegistrationForm from './RegistrationForm';
import LatestNews from './LatestNews';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

const HeroSection = ({ onGetStartedClick }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormClose = () => {
    setIsFormOpen(false); 
  };

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Connect, Collaborate, and Succeed with UniConnect
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            UniConnect bridges the gap between students and opportunities, providing access to scholarships, internships, and a collaborative network.
          </p>

          <div className="flex space-x-4">
            <button
              onClick={onGetStartedClick}
              className="bg-[#5e208f] text-white py-2 px-6 rounded-lg hover:bg-[#440f69] transition duration-300 cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                document.getElementById("key-features").scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-purple-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-md">
              <button
                onClick={handleFormClose}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-600 transition duration-300"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
              <RegistrationForm onClose={handleFormClose} />
            </div>
          </div>
        )}
      </div>

      <LatestNews /> {/* Include LatestNews component here */}
    </>
  );
};

export default HeroSection;
