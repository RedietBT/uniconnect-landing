import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BackgroundImage from '../assets/cambridge.avif';
import RegistrationForm from './RegistrationForm';
import LatestNews from './LatestNews';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

const HeroSection = ({ onOpenRegistration }) => {
  const navigate = useNavigate(); // Initialize the navigate function

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
              onClick={onOpenRegistration} // Open the registration form using the passed function
              className="bg-[#5e208f] text-white py-2 px-6 rounded-lg hover:bg-[#440f69] transition duration-300 cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                navigate('/about'); // Navigate to the About page
              }}
              className="bg-white text-purple-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <LatestNews /> {/* Include LatestNews component here */}
    </>
  );
};

export default HeroSection;
