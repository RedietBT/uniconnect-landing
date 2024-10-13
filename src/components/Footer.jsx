// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5e208f] to-[#440f69] text-white py-6 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-5 left-0 w-20 h-20 bg-[#5e208f] opacity-30 rounded-full blur-xl"></div>
      <div className="absolute -bottom-5 right-0 w-32 h-32 bg-[#440f69] opacity-30 rounded-full blur-xl"></div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 relative z-10">
        {/* Left: Brand and CTA */}
        <div className="text-center lg:text-left lg:w-1/3">
          <h2 className="text-3xl font-extrabold mb-2">UniConnect</h2>
          <p className="text-lg mb-2 max-w-md">
            Connecting students to opportunities. Let's shape the future together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#5e208f] py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>

        {/* Center: Social Media Icons */}
        <div className="flex space-x-4">
          {[
            { href: 'https://www.facebook.com', icon: FaFacebookF },
            { href: 'https://www.twitter.com', icon: FaTwitter },
            { href: 'https://www.linkedin.com', icon: FaLinkedinIn },
            { href: 'https://www.instagram.com', icon: FaInstagram },
            { href: 'mailto:support@uniconnect.com', icon: FaEnvelope },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-[#5e208f] rounded-full hover:bg-[#440f69] hover:text-white transition duration-300 transform hover:scale-110 shadow-md"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Right: Quick Links */}
        <div className="text-center lg:text-right lg:w-1/3">
          <ul className="space-y-2 text-lg">
            <li>
              <a href="/about" className="hover:underline hover:text-gray-200 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline hover:text-gray-200 transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline hover:text-gray-200 transition duration-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div className="text-center mt-4 text-sm text-gray-300 relative z-10">
        © 2024 UniConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
