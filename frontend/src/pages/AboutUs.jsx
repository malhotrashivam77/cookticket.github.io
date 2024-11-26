import React from 'react';
import '../../src/assets/styles/AboutUs.css';
import aboutus_img from '../assets/images/vectors/aboutus.png';

const AboutUs = () => {
  return (
    <div className='about-us' style={{textAlign: 'center'}}>
      <h1 className="about-us-title" style={{marginbottom: '-30px !important'}}>About Us</h1>
          <div className="about-us-page" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px !important', padding: '0 1rem', maxWidth: '100%', margin: '0 auto'
    }}>
      
      <div className="about-us-content">
        
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
      <div className="about-us-image">
        <img src={aboutus_img} alt="About Us" />
      </div>
    </div>
    </div>

  );
};

export default AboutUs;
