import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../src/assets/styles/Slider.css';

// Import images
import charDhamImage from '../assets/images/cookticket_chardham.jpeg';
import mussoorieImage from '../assets/images/cookticket_mussoorie.jpeg';
import rishikeshImage from '../assets/images/cookticket_rishikesh.jpeg';

const travelPackages = [
  { id: 1, title: 'Char Dham', image: charDhamImage, description: 'Embark on a divine journey through the sacred Chardham pilgrimage, where spirituality meets breathtaking Himalayan vistas.' },
  { id: 2, title: 'Mussorie + Dhanaulti', image: mussoorieImage, description: 'Experience the serene charm of Mussoorie and the tranquil beauty of Dhanaulti, nestled in the heart of the Himalayas.' },
  { id: 3, title: 'Rishikesh(Yoga Capital)', image: rishikeshImage, description: 'Dive into adventure and spirituality in Rishikesh, the Yoga Capital of the World.' },
];

const TravelPackagesSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    enquiryFor: '',
    phoneNumber: '',
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server or handle it as needed
    console.log(formData);
    setIsModalOpen(false);
  };

  return (
    <section className="travel-packages-slider px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Explore Our Travel Packages</h1>
      <Slider {...settings}>
        {travelPackages.map((packageItem) => (
          <div key={packageItem.id} className="package-card">
            <img src={packageItem.image} alt={packageItem.title} className="package-image" />
            <div className="package-details text-center">
              <h3 className="package-title text-xl font-semibold">{packageItem.title}</h3>
              <p className="package-description text-sm">{packageItem.description}</p>
              <button 
                className="enquiry-button"
                onClick={() => setIsModalOpen(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal Popup for Enquiry */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Enquiry Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiryFor">Enquiry For</label>
                <select
                  id="enquiryFor"
                  name="enquiryFor"
                  value={formData.enquiryFor}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Package">Package</option>
                  <option value="Destination Wedding">Destination Wedding</option>
                  <option value="Flight Tickets">Flight Tickets</option>
                  <option value="Other Services">Other Services</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TravelPackagesSlider;
