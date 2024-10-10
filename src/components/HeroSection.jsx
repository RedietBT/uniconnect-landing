// src/components/HeroSection.jsx
import React from 'react';
import BackgroundImage from '../assets/cambridge.avif';
import LatestNews from './LatestNews'; // Import the LatestNews component

const HeroSection = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Connect, Collaborate, and Succeed with UniConnect
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            UniConnect bridges the gap between students and opportunities, providing access to scholarships, internships, and a collaborative network.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="/get-started"
              className="bg-[#5e208f] text-white py-2 px-6 rounded-lg hover:bg-[#440f69] transition duration-300"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border border-[#5e208f] text-white py-2 px-6 rounded-lg hover:bg-[#5e208f] hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <LatestNews /> {/* Include LatestNews component here */}
    </>
  );
};

export default HeroSection;
