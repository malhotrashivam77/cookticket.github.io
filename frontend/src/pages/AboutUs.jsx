import React from 'react';
import '../../src/assets/styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          Welcome to COOKTICKET, your ultimate destination for unforgettable travel experiences! We specialize in providing exclusive travel packages, flight bookings, hotel reservations, and destination weddings, ensuring that your journey is seamless and memorable.
        </p>
        <p className="about-us-description">
          Founded with a vision to make travel easy and accessible, COOKTICKET serves both international and Indian travelers, offering customized packages to some of the most popular destinations. Whether you're seeking relaxation, adventure, or a spiritual retreat, we've got something special for you.
        </p>
        <p className="about-us-description">
          Our dedicated team works tirelessly to offer the best deals and unique experiences, ensuring that your travels are filled with joy and lasting memories. Join us in exploring the world!
        </p>
      </div>
      {/* <div className="about-us-image">
        <img src="../../src/assets/images/about-us-image.jpg" alt="About Us" />
      </div> */}
    </div>
  );
};

export default AboutUs;
