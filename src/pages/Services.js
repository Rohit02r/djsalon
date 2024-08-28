import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import './Services.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import services from '../components/data/servicesd'; // Adjust the path as needed

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const handleCardClick = (serviceTitle) => {
    navigate(`/service-details/${serviceTitle.toLowerCase().replace(/ /g, '-')}`);
  };

  const handleBookAppointment = (serviceTitle) => {
    setSelectedService(serviceTitle);
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
                <div 
                  className="card flex-fill mb-4"
                  onClick={() => handleCardClick(service.title)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={service.img} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <button 
                      className="btn btn-secondary book-button mt-2" 
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleBookAppointment(service.title);
                      }}
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
            <BookingForm service={selectedService} onClose={handleCloseModal} />
          </Modal.Body>
        </Modal>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
