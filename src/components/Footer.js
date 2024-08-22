import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>DJ Saloon</p>
            <p>123 Beauty St, Salon City</p>
            <p>Email: info@djsaloon.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-4">
            <h5>Feedback</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Feedback</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-4">
            <h5>Find Us</h5>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094377!2d144.95373531568745!3d-37.8172097420215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7ba8d1077e6!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1641735668984!5m2!1sen!2sau"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="DJ Saloon Location"
            ></iframe> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
