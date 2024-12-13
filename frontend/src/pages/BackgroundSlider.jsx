// BackgroundSlider.jsx
import React, { useEffect, useState } from 'react';
import '../assets/styles/BackgroundSlider.css'; // Create a CSS file for styling
// import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';
import bg4 from '../assets/images/bg4.jpg';
import bg5 from '../assets/images/bg5.jpg';
import bg6 from '../assets/images/bg6.jpg';
import bg7 from '../assets/images/bg7.jpg';
import bg8 from '../assets/images/bg8.jpg';
import bg9 from '../assets/images/bg9.jpg';
import bg10 from '../assets/images/bg10.jpg';

const BackgroundSlider = () => {
  const images = [
    bg10,
    bg9,
    bg8,
    bg7,
    bg6,
    bg5,
    bg4,    
    bg3,
    bg2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="background-slider">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
    </div>
  );
};

export default BackgroundSlider;