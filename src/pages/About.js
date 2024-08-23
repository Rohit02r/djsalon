import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import Reviewm1 from '../assests/Review/review m 1.jpg';
import Reviewf1 from '../assests/Review/review f1.jpg';
import Reviewm2 from '../assests/Review/review m2.jpg';

const About = () => {
  const reviews = [
    {
      name: 'John Doe',
      feedback: 'Amazing service! The staff is professional and the ambiance is perfect.',
      rating: 5,
      image: Reviewm1,
    },
    {
      name: 'Jane Smith',
      feedback: 'Loved the experience. The beauticians are well-trained and friendly.',
      rating: 4,
      image: Reviewf1,
    },
    {
      name: 'Emily Johnson',
      feedback: 'A fantastic place to relax and rejuvenate. Highly recommended!',
      rating: 5,
      image: Reviewm2,
    },
  ];

  return (
    <div>
    <div className="about-container">
      <section className="intro">
        <h2 className='term-card'>Welcome to DJ Saloon</h2>
        <p>
          For over 15 years, DJ Saloon has been a beacon of beauty and style, dedicated to offering a premier salon experience. Our commitment to excellence has earned us numerous awards and accolades within the beauty industry. At DJ Saloon, we take pride in our team of certified beauticians who are skilled in a wide range of beauty treatments and services, tailored specifically to meet your individual needs and preferences.
        <br /><br />
          Our salon is not just a place where you come for a service; it's a destination where you can relax, unwind, and enjoy an exceptional beauty experience. Whether you are looking for a simple haircut, an elaborate makeover, or a luxurious spa treatment, our team ensures that every visit is a memorable one.
          <br /><br />
          We believe in using only the finest products and state-of-the-art techniques to ensure that every client receives the highest level of care and attention. Our passion for beauty and dedication to our craft are reflected in the satisfaction of our clients, who return to us time and again for their beauty needs.
        </p>
        <h3 className='term-card'>Why Choose Us</h3>
        <p>
          Our salon stands out because of our team's extensive experience and passion for the beauty industry. We are dedicated to providing personalized services that cater to your specific needs and preferences. Our professionals are trained in the latest beauty trends and techniques, ensuring that you receive the most current and effective treatments available.
          <br /><br />
          At DJ Saloon, we focus on delivering an unparalleled level of service, combining expertise with a friendly and welcoming atmosphere. We believe that every client deserves to feel pampered and valued, and we strive to create an environment that makes you feel right at home.
        </p>
        <h3 className='term-card'>Experience the Difference</h3>
        <p>
          With over a decade of experience in the beauty industry, our team brings a wealth of knowledge and skill to each service we provide. Our experience allows us to offer a comprehensive range of beauty treatments, from hair styling to skincare, ensuring that all your beauty needs are met under one roof.
          <br /><br />
          Our commitment to continuous learning and improvement means that we stay ahead of industry trends and advancements. Whether you are looking for a quick beauty fix or an entire day of indulgence, DJ Saloon promises an experience that exceeds your expectations and leaves you feeling rejuvenated and refreshed.
        </p>
        <h3 className='term-card'>Our Services Across India</h3>
        <p>
          DJ Saloon is proud to have established a presence in some of India's most vibrant and bustling cities. With branches in Mumbai, Delhi, Bangalore, and Chennai, we are committed to providing our exceptional beauty services to clients across the country. Each location upholds the same high standards of service and quality that have become synonymous with our brand.
          <br /><br />
          No matter where you are in India, you can trust that DJ Saloon will deliver the same level of excellence and care that we are known for. Our expanding network of branches allows us to bring our premier salon experience to even more clients, ensuring that everyone can enjoy the benefits of our top-notch beauty services.
        </p>
      </section>

      <section className="reviews ">
        <h3 className='term-card'>What Our Customers Say</h3>
        <div className="review-cards ">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.image} alt={review.name} className="review-image" />
              <h4>{review.name}</h4>
              <p>{'⭐'.repeat(review.rating)}</p>
              <p>{review.feedback}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
    <Footer />
    </div>
  );
};

export default About;