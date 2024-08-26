import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const location = useLocation();
  const { service } = location.state;  // Ensure service has a title, description, etc.
  const [showModal, setShowModal] = useState(false);

  const handleBookAppointment = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
    <div className="service-details  p-5">
      <div className="cont ">
          <div className='sdalign'>
            <h2>{service.title}</h2>
            <img src={service.img} alt={service.title} className="service-image mb-4" />
          </div>
          <div className="sddesc">
            <p>{service.description}</p>
            <button className="btn btn-primary mt-4 sdb" onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment for {service.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookingForm service={service.title} />
        </Modal.Body>
      </Modal>
    </div>
      <Footer />
      </div>
  );
};

export default ServiceDetails;
