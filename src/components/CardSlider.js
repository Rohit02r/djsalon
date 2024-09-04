import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import BookingForm from './BookingForm'; 
import './CardSlider.css';
import Hair1 from '../assests/Hair/hair 1.jpg';
import Hair2 from '../assests/Hair/Makeup copy.jpg';
import Hair3 from '../assests/Hair/makeup.jpg';
import Hair4 from '../assests/Hair/facial.jpg';
import Hair5 from '../assests/Hair/pedicure.jpg';
import Hair6 from '../assests/Hair/hair 6.jpg';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const cards = [
    { img: Hair1, title: "Sophia", profession: "Hair Stylist", description: "Expert hair styling services to give you the perfect look for any occasion." },
    { img: Hair2, title: "Emma", profession: "Beautician", description: "Comprehensive beauty treatments to enhance your natural beauty." },
    { img: Hair3, title: "Olivia", profession: "Makeup Artist", description: "Professional makeup services tailored to your unique style and preferences." },
    { img: Hair4, title: "Isabella", profession: "Skin Care Specialist", description: "Advanced skin care treatments to rejuvenate and refresh your skin." },
    { img: Hair5, title: "Mia", profession: "Nail Technician", description: "Stylish nail services, including manicures, pedicures, and nail art." },
    { img: Hair6, title: "Liam", profession: "Hair Colorist", description: "Creative hair coloring services to transform your look with vibrant hues." },
  ];

  const visibleSlides = 3;
  const totalSlides = cards.length;

  const nextSlide = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalSlides - visibleSlides); 
    }
  };

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };
  
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevSlide}>&#10094;</button>
        <div className="card-slider" style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.img} alt={card.title} />
              <div className="desc">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <Button className="con" onClick={() => handleShowModal(card.profession)}>Book Appointment</Button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>&#10095;</button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookingForm service={selectedService} onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CardSlider;