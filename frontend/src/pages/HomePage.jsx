import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import AdminLoginModal from '../components/admin/AdminLoginModal';
import { adminLogin } from '../services/api';
import TravelPackagesSlider from './TravelPackagesSlider'; // Import the slider
import '../assets/styles/Hero.css';
import AboutUs from './AboutUs';
import WelcomeTourists from './WelcomeTourists';
import Footer from './footer';

const HomePage = () => {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleAdminLogin = async (credentials) => {
    try {
      const response = await adminLogin(credentials);
      localStorage.setItem('token', response.token);
      setIsAdminModalOpen(false);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar onAdminClick={() => setIsAdminModalOpen(true)} />

      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center text-white relative">
        <div className="hero-content text-center px-4">
          <h1 className="hero-title mb-4">
            Your Gateway to Extraordinary Adventures
          </h1>
          <p className="hero-subtitle">
          Book Flights | Book Hotels | packages | Destination Weddings | Tourism
          </p>
          <button className="cta-button">
            Start Your Journey
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="scroll-indicator text-white text-center">
          <div className="mb-2">Scroll to explore</div>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div> */}
      </section>

      {/* Travel Packages Slider */}
      <TravelPackagesSlider />
      <WelcomeTourists />
      <AboutUs />
     <Footer />

      {/* Admin Login Modal */}
      {/* <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLogin={handleAdminLogin}
      /> */}
    </div>
  );
};

export default HomePage;
