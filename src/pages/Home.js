import React from 'react';
import OffersCarousel from '../components/OffersCarousel';

import Footer from '../components/Footer';

import CardSlider from '../components/CardSlider';


const Home = () => {
  return (
    <div>
      <OffersCarousel />
      <h3>Welcome to DJ Saloon, where beauty meets precision. Our expert stylists and beauticians are dedicated to providing top-notch services in a relaxing and friendly environment. Whether you're looking for a fresh haircut, a rejuvenating massage, or a complete makeover, we tailor every service to meet your unique needs. Discover the perfect blend of luxury and comfort at DJ Saloon, where your satisfaction is our priority.</h3>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Meet Our Artists</h2>
        < CardSlider/>
       
      </div>
      <Footer />
    </div>
  );
};

export default Home;
