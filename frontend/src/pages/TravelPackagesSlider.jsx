import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../src/assets/styles/Slider.css';

// Import images
import charDhamImage from '../assets/images/cookticket_chardham.jpeg';
import mussoorieImage from '../assets/images/cookticket_mussoorie.jpeg';
import rishikeshImage from '../assets/images/cookticket_rishikesh.jpeg';

// Travel packages data
const travelPackages = [
  {
    id: 1,
    title: 'Char Dham',
    image: charDhamImage,
    description: 'Embark on a divine journey through the sacred Chardham pilgrimage, where spirituality meets breathtaking Himalayan vistas.',
  },
  {
    id: 2,
    title: 'Mussoorie + Dhanaulti',
    image: mussoorieImage,
    description: 'Experience the serene charm of Mussoorie and the tranquil beauty of Dhanaulti, nestled in the heart of the Himalayas.',
  },
  {
    id: 3,
    title: 'Rishikesh (Yoga Capital)',
    image: rishikeshImage,
    description: 'Dive into adventure and spirituality in Rishikesh, the Yoga Capital of the World.',
  },
];

// Constant for contact details
const CONTACT_NUMBER = '+911234567890';

const TravelPackagesSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    travelDate: '',
    passengers: '',
    enquiryFor: '',
    destination: '',
    additionalRequirements: '',
    preferredContactMethod: 'WhatsApp',
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

    if (!formData.name || !formData.phoneNumber) {
      alert('Please fill in the required fields: Name and Phone Number.');
      return;
    }

    // console.log('Enquiry Submitted:', { ...formData, selectedPackage });
    setIsModalOpen(false);
  };

  const openEnquiryModal = (packageItem) => {
    setSelectedPackage(packageItem);
    setFormData((prev) => ({
      ...prev,
      enquiryFor: packageItem.title,
      destination: packageItem.title,
    }));
    setIsModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    const message = `I'm interested in the ${selectedPackage?.title} package.`;
    const whatsappUrl = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${CONTACT_NUMBER}`;
  };

  return (
    <section className="travel-packages-slider px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Explore Our Travel Packages</h1>
      <Slider {...settings}>
        {travelPackages.map((packageItem) => (
          <div key={packageItem.id} className="package-card">
            <img
              src={packageItem.image}
              alt={`${packageItem.title} image`}
              className="package-image"
            />
            <div className="package-details text-center">
              <h3 className="package-title text-xl font-semibold">{packageItem.title}</h3>
              <p className="package-description text-sm">{packageItem.description}</p>
              <button
                className="enquiry-button"
                onClick={() => openEnquiryModal(packageItem)}
                aria-label={`Enquire about ${packageItem.title}`}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3  text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <h3 className="modal-title text-2xl font-bold mb-4 text-center">
              Enquiry for {selectedPackage?.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
         
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="travelDate">Preferred Travel Date</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="submit-form flex-buttons mt-4">
                {/* <div className='whatsapp-button'>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="bg-green-500"
                  >
                    WhatsApp
                  </button>
                </div> */}
                <div className='call-button'>
                  <button
                    type="button"
                    onClick={handleCallClick}
                    className="bg-blue-500"
                  >
                    Call Now
                  </button>
                </div>

                <div className='submit-button'>
                  <button
                    type="submit"
                    className="bg-indigo-600"
                  >
                    Submit Enquiry
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      )}
    </section>
  );
};

export default TravelPackagesSlider;
