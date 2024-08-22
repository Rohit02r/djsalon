import React from 'react';
import Footer from '../components/Footer';
import './Contact.css'; // Import the corresponding CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      <section id="contact-info" className="py-5">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            We are here to assist you. If you have any questions or need support, please reach out to us through the following contact details or fill out the contact form below.
          </p>
          <div className="contact-details">
            
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="tel">Phone Number</label>
                <input type="text" id="number" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section id="terms-conditions" className="py-5 bg-light">
        <div className="container">
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to DJ Saloon. These terms and conditions outline the rules and regulations for the use of our services and products. By accessing and using our website or services, you agree to comply with and be bound by the following terms and conditions:
          </p>
          
          <h4>1. Products and Services</h4>
          <p>
            We offer a variety of beauty and wellness services and products. All products are subject to availability. We reserve the right to withdraw or amend any product or service without notice.
          </p>

          <h4>2. Booking and Payments</h4>
          <p>
            All appointments must be booked in advance. Payments for services and products can be made through our secure payment gateway. All transactions are processed in a secure manner to protect your personal information.
          </p>

          <h4>3. Returns and Refunds</h4>
          <p>
            Products purchased can be returned within 14 days of receipt, provided they are unopened and in their original packaging. For services, cancellations or rescheduling must be made at least 24 hours in advance. Refunds are processed according to our refund policy.
          </p>

          <h4>4. Privacy Policy</h4>
          <p>
            We are committed to protecting your privacy. Any personal information collected will be used solely for processing orders, providing customer support, and improving our services. Please refer to our Privacy Policy for more details.
          </p>

          <h4>5. Contact Us</h4>
          <p>
            If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:support@djsaloon.com">support@djsaloon.com</a>.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
