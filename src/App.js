// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ScholarshipPage from './pages/ScholarshipPage';
import ResearchPage from './pages/ResearchPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage'; 
import InternshipPage from './pages/InternshipPage'; 
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginFormOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user from local storage
  };

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar
            onLoginClick={() => setIsLoginFormOpen(true)}
            onLogoutClick={handleLogout}
            user={user} // Pass user to NavBar
            isSearchOpen={isSearchOpen}
            toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
            closeSearch={() => setIsSearchOpen(false)}
          />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection onOpenRegistration={() => setIsRegisterFormOpen(true)} />
                <KeyFeatures />
                <HowItWorks />
                <ContactUs />
              </>
            } />
            <Route path="/scholarships" element={<ScholarshipPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/internship" element={<InternshipPage user={user} />} /> 
          </Routes>

          {/* Login Modal */}
          {isLoginFormOpen && (
            <div className="fixed inset-0 flex items-start justify-center z-20" style={{ top: '70px' }}>
              <div className="bg-white p-4 rounded shadow-lg w-full max-w-sm">
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              </div>
            </div>
          )}

          {/* Registration Modal */}
          {isRegisterFormOpen && (
            <div className="fixed inset-0 flex items-start justify-center z-20" style={{ top: '70px' }}>
              <div className="bg-white p-4 rounded shadow-lg w-full max-w-sm">
                <RegistrationForm onClose={() => setIsRegisterFormOpen(false)} />
              </div>
            </div>
          )}

          {user && <p className="text-center mt-4">Welcome, {user.username}!</p>}

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
