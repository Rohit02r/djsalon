import React from 'react';
import './Footer.css'
import YoutubeIcon from '../assests/Icon/y.svg';
import TwitterIcon from '../assests/Icon/t.svg';
import InstagramIcon from '../assests/Icon/i.svg';
import WhatsAppIcon from '../assests/Icon/w.svg';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-md-4 ps-4">
            <h5>Contact Us</h5>
            <p>Email: info@djsaloon.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 ps-4">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/djsalon/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4 ps-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={YoutubeIcon} alt="YouTube" width="24" height="24" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" width="24" height="24" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" width="24" height="24" />
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <img src={WhatsAppIcon} alt="WhatsApp" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 DJ Saloon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;