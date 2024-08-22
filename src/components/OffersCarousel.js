import React from 'react';
import { Carousel } from 'react-bootstrap';
import Barber1 from '../assests/Slider/Barber1.jpg';
import Hairstyle from '../assests/Slider/Hairstyle.jpg';
import Barber2 from '../assests/Slider/Barber2.jpg';
import Makeup from '../assests/Slider/Makeup.jpg';


const OffersCarousel = () => {
  return (
    <Carousel className='m-5'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Barber1}
          alt="First slide"
          style={{ height: '500px',  }} // Ensure image height is 700px
        />
        <Carousel.Caption>
          <h3>Special Offer 1</h3>
          <p>Get 20% off on all haircuts this weekend!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Hairstyle}
          alt="Second slide"
          style={{ height: '500px',  }} // Ensure image height is 700px
        />
        <Carousel.Caption>
          <h3>Special Offer 2</h3>
          <p>Free hair color with every manicure!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Barber2}
          alt="Third slide"
          style={{ height: '500px',  }} // Ensure image height is 700px
        />
        <Carousel.Caption>
          <h3>Special Offer 3</h3>
          <p>50% off on all hair treatments!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Makeup}
          alt="Fourth slide"
          style={{ height: '500px',  }} // Ensure image height is 700px
        />
        <Carousel.Caption>
          <h3>Special Offer 4</h3>
          <p>Buy one get one free on all skincare products!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default OffersCarousel;
