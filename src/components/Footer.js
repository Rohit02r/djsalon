import React from 'react';
import './Footer.css'
import YoutubeIcon from '../assests/Icon/y.svg';
import TwitterIcon from '../assests/Icon/t.svg';
import InstagramIcon from '../assests/Icon/i.svg';
import WhatsAppIcon from '../assests/Icon/w.svg';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="footer-container container">
        <div className="footer-row row">
         
          <div className="footer-col col-md-4 text-center">
            <h5 className="footer-heading">Contact Us</h5>
            <p>Email: info@djsaloon.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          
          <div className="footer-col col-md-4 text-center">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/djsalon/about" className="footer-link">About Us</a></li>
              <li><a href="/djsalon/services" className="footer-link">Services</a></li>
              <li><a href="/djsalon/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

         
          <div className="footer-col col-md-4 text-center">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="footer-social-icons align-center">
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
        <div className="footer-copyright">
          <p>&copy; 2024 DJ Saloon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;