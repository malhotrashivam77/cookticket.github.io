import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPanel from './components/admin/AdminPanel';
import AdminLoginModal from './components/admin/AdminLoginModal';
import VisaServicesPage from './pages/VisaServicesPage';
import FlightBookingPage from './pages/FlightTicketBooking';
import HotelBookingPage from './pages/HotelBooking';
import ContactUs from './pages/contactus';
import BackgroundSlider from './pages/BackgroundSlider';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLoginModal />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/visa-services" element={<VisaServicesPage />} /> 
          <Route path="/flight-booking" element={<FlightBookingPage />} />
          <Route path="/hotel-booking" element={<HotelBookingPage />} />
          <Route path="/background-slider" element={<BackgroundSlider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;