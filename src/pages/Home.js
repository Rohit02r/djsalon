import React from 'react';
import'./Home.css';
import OffersCarousel from '../components/OffersCarousel';

import Footer from '../components/Footer';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials'

import CardSlider from '../components/CardSlider';


const Home = () => {
  return (
    <div>
      <OffersCarousel />
      
      <div className="container  dm mt-5">
        {/* Introductory Text as a Card */}
        <div className="card hdm shadow p-4 mb-5">
          <h3 className="card-title text-center">Welcome to DJ Saloon</h3>
          <p className="card-text fs-6">
            Where beauty meets precision. Our expert stylists and beauticians are dedicated to providing top-notch services in a relaxing and friendly environment. Whether you're looking for a fresh haircut, a rejuvenating massage, or a complete makeover, we tailor every service to meet your unique needs. Discover the perfect blend of luxury and comfort at DJ Saloon, where your satisfaction is our priority.
          </p>
        </div>
        
        {/* New Section: Featured Services */}
        <FeaturedServices />

        {/* Meet Our Artists Section */}
        <h2 className="text-center mb-4">Meet Our Artists</h2>
        <CardSlider />
        
        {/* New Section: Testimonials */}
        <Testimonials />
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;