import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './ArtistsCarousel.css';

const ArtistsCarousel = () => {
  return (
    <Carousel controls={true} indicators={false} interval={null} pause={false}>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <div className="card artist-card shadow-sm">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Artist 1" />
            <div className="card-body">
              <h5 className="card-title">Artist 1</h5>
              <p className="card-text">Expert in Haircuts</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </div>
          <div className="card artist-card shadow-sm">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Artist 2" />
            <div className="card-body">
              <h5 className="card-title">Artist 2</h5>
              <p className="card-text">Specialist in Hair Color</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </div>
          <div className="card artist-card shadow-sm">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Artist 3" />
            <div className="card-body">
              <h5 className="card-title">Artist 3</h5>
              <p className="card-text">Manicure & Pedicure</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <div className="card artist-card shadow-sm">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Artist 4" />
            <div className="card-body">
              <h5 className="card-title">Artist 4</h5>
              <p className="card-text">Expert in Haircuts</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </div>
          <div className="card artist-card shadow-sm">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Artist 5" />
            <div className="card-body">
              <h5 className="card-title">Artist 5</h5>
              <p className="card-text">Specialist in Hair Color</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </div>
          <div className="card artist-card shadow-sm">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Artist 6" />
            <div className="card-body">
              <h5 className="card-title">Artist 6</h5>
              <p className="card-text">Manicure & Pedicure</p>
              <Button variant="primary">Book Appointment</Button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ArtistsCarousel;
