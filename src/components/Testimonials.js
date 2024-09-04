import React from 'react';


import Customer1 from '../assests/Review/review f1.jpg';
import Customer2 from '../assests/Review/review m 1.jpg';
import Customer3 from '../assests/Review/review m2.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      image: Customer1,
      name: 'John Doe',
      feedback: 'The best salon experience I have ever had! The stylists are true professionals.',
      rating: 5,
    },
    {
      image: Customer2,
      name: 'Jane Smith',
      feedback: 'Amazing service and friendly staff. I always leave feeling rejuvenated.',
      rating: 4,
    },
    {
      image: Customer3,
      name: 'Emily Johnson',
      feedback: 'I love the ambiance and the attention to detail. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg border border-2">
              <div className="card-body text-center">
                <img
                  src={testimonial.image}
                  className="rounded-circle mb-3"
                  alt={testimonial.name}
                  style={{ width: '80px', height: '80px' }}
                />
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">"{testimonial.feedback}"</p>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
