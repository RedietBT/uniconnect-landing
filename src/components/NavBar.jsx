import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Importing the search icon from react-icons
import { AiOutlineClose } from 'react-icons/ai'; // Importing the close (X) icon from react-icons

const NavBar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false); // State to control search bar visibility

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen); // Toggle the search bar on click
  };

  const closeSearch = () => {
    setSearchOpen(false); // Close the search bar when the X button is clicked
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 transition duration-500 ease-in-out">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className="text-2xl font-bold text-[#5e208f]">UniConnect</a>
        </div>

        {/* Search Icon, Search Bar, and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon and Bar */}
          <div className="relative flex items-center">
            {/* Search Icon */}
            <button onClick={toggleSearch} className="text-gray-700 focus:outline-none hover:text-[#5e208f] transition duration-300">
              <FiSearch className="text-2xl" />
            </button>

            {/* Search Bar Popup */}
            {isSearchOpen && (
              <div className="absolute top-10 right-0 w-[400px] bg-white border border-gray-300 rounded-lg p-2 shadow-lg transition transform duration-300 ease-in-out">
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-[#5e208f] text-black transition duration-300"
                  />
                  {/* X Button to Close Search Bar */}
                  <button onClick={closeSearch} className="ml-2 text-gray-700 hover:text-[#5e208f] focus:outline-none transition duration-300">
                    <AiOutlineClose className="text-2xl" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sign Up and Login Buttons */}
          <div className="flex items-center space-x-4">
            <a href="/signup" className="bg-[#5e208f] text-white px-4 py-2 rounded-lg hover:bg-[#440f69] transition duration-300">Sign Up</a>
            <a href="/login" className="border border-[#5e208f] text-[#5e208f] px-4 py-2 rounded-lg hover:bg-[#440f69] hover:text-white transition duration-300">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
