import React from 'react';

// Import images
import HaircutsImage from '../assests/Hair/hair 1.jpg';
import FacialsImage from '../assests/Services/facial.jpg';
import MakeupImage from '../assests/Services/makeup.jpg';
import ManicurePedicureImage from '../assests/Services/manicure.jpg';

const FeaturedServices = () => {
  const services = [
    { image: HaircutsImage, title: 'Haircuts', description: 'Precision haircuts tailored to your style.' },
    { image: FacialsImage, title: 'Facials', description: 'Rejuvenating facials for glowing skin.' },
    { image: MakeupImage, title: 'Makeup', description: 'Professional makeup for every occasion.' },
    { image: ManicurePedicureImage, title: 'Manicure & Pedicure', description: 'Luxurious nail care services.' },
  ];

  return (
    <div className="featured-services">
      <h2 className="text-center mb-4">Our Featured Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card text-center h-100 shadow-sm">
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
