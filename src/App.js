// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <KeyFeatures /> 
      <HowItWorks />
      <ContactUs />
      <Footer />
      {/* Other components can go here */}
    </div>
  );
};

export default App;
