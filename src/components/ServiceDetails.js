import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import './ServiceDetails.css';
import services from '../components/data/servicesd'; // Import services data

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/ /g, '-') === serviceName);

  const [showModal, setShowModal] = useState(false);

  const handleBookAppointment = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <div className="service-details p-5">
        <div className="cont">
          <div className="sdalign">
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