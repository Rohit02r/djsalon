import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm'; // Import your BookingForm component
import './Services.css'; // Import the corresponding CSS file
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

// Import service images correctly
import Haircut from '../assests/Services/hair 4.jpg';
import Manicure from '../assests/Services/manicure.jpg';
import Pedicure from '../assests/Services/pedicure.jpg';
import Headmassage from '../assests/Services/headmassage.jpg';
import Eyebrow from '../assests/Services/eyebrow.jpg';
import Makeup from '../assests/Services/makeup.jpg';
import Haircolor from '../assests/Services/haircolor.jpg';
import Facial from '../assests/Services/facial.jpg';
import Beard from '../assests/Services/beard.jpg';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const services = [
    { img: Manicure, title: 'Manicure', description: 'Professional manicure services to make your hands look stunning.' },
    { img: Pedicure, title: 'Pedicure', description: 'Relaxing pedicure treatments for perfectly pampered feet.' },
    { img: Haircut, title: 'Haircut', description: 'Stylish haircuts tailored to your personal taste.' },
    { img: Headmassage, title: 'Massage', description: 'Soothing massage therapies to relieve stress and tension.' },
    { img: Facial, title: 'Facial', description: 'Revitalizing facials for glowing and refreshed skin.' },
    { img: Haircolor, title: 'Hair Color', description: 'Creative hair coloring services to brighten up your look.' },
    { img: Beard, title: 'Waxing', description: 'Effective waxing services for smooth and hair-free skin.' },
    { img: Eyebrow, title: 'Skin Treatment', description: 'Advanced skin treatments for various skin concerns.' },
    { img: Makeup, title: 'Makeup', description: 'Professional makeup services for any occasion.' },
  ];

  const handleViewDetails = (service) => {
    navigate('/service-details', { state: { service } });
  };

  const handleBookAppointment = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section id="services" className="services-section pt-5">
        <div className="container">
          <h2>Our Services</h2>
          <p className="services-intro">
            We provide world-class beauty and wellness services to ensure you look and feel your best. Our experienced team is dedicated to delivering exceptional results with a touch of luxury.
          </p>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex" data-aos="fade-up">
                <div className="card flex-fill mb-4">
                  <img src={service.img} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleViewDetails(service)}
                    >
                      View Details
                    </button>
                    <button 
                      className="btn btn-secondary mt-2" 
                      onClick={() => handleBookAppointment(service.title)}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Book an Appointment for {selectedService}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BookingForm service={selectedService} />
          </Modal.Body>
        </Modal>
      </section>
      <Footer />
    </div>
  );
};

export default Services;