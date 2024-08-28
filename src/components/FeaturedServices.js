import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


// Import images
import HaircutsImage from '../assests/Hair/hair 1.jpg';
import FacialsImage from '../assests/Services/facial.jpg';
import MakeupImage from '../assests/Services/makeup.jpg';
import ManicurePedicureImage from '../assests/Services/manicure.jpg';

const FeaturedServices = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const services = [
    { 
      image: HaircutsImage, 
      title: 'Haircuts', 
      description: 'Precision haircuts tailored to your style.',
      route: '/service-details/haircut' 
    },
    { 
      image: FacialsImage, 
      title: 'Facials', 
      description: 'Rejuvenating facials for glowing skin.',
      route: '/service-details/facial' 
    },
    { 
      image: MakeupImage, 
      title: 'Makeup', 
      description: 'Professional makeup for every occasion.',
      route: '/service-details/makeup' 
    },
    { 
      image: ManicurePedicureImage, 
      title: 'Manicure & Pedicure', 
      description: 'Luxurious nail care services.',
      route: '/service-details/manicure' 
    },
  ];

  const handleCardClick = (route) => {
    console.log("Navigating to:", route); // Debug line
    navigate(route); // Navigate to the respective route on card click
  };

  return (
    <div className="featured-services">
      <h2 className="text-center mb-4">Our Featured Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="col-md-3 mb-4"
            onClick={() => handleCardClick(service.route)} 
            style={{ cursor: 'pointer' }}
          >
            <div className="card text-center h-100 shadow border border-2 ">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;