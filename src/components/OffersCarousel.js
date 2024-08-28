import React from 'react';
import './OffersCarousel.css'
import { Carousel } from 'react-bootstrap';
import Barber1 from '../assests/Slider/Barber1.jpg';
import Hairstyle from '../assests/Slider/Hairstyle.jpg';
import Barber2 from '../assests/Slider/Barber2.jpg';
import Makeup from '../assests/Slider/Makeup.jpg';


const OffersCarousel = () => {
  return (
    <Carousel className='offers-carousel m-5 px-5'>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 rounded-3 offer-image"
          src={Barber1}
          alt="First slide"
        />
        <Carousel.Caption className="offer-caption">
          <h3>Special Offer </h3>
          <p>Get 20% off on all haircuts this weekend!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 rounded-3 offer-image"
          src={Hairstyle}
          alt="Second slide"
        />
        <Carousel.Caption className="offer-caption">
          <h3>Limited Offer </h3>
          <p>Free hair color with every manicure!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 rounded-3 offer-image"
          src={Barber2}
          alt="Third slide"
        />
        <Carousel.Caption className="offer-caption">
          <h3>Discount Offer </h3>
          <p>50% off on all hair treatments!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 rounded-3 offer-image"
          src={Makeup}
          alt="Fourth slide"
        />
        <Carousel.Caption className="offer-caption">
          <h3>Ultimate Offer </h3>
          <p>Buy one get one free on all skincare products!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default OffersCarousel;