import React from 'react';
import  { useState, useEffect } from 'react';
import './ScrolltoTop.css'; // Import CSS for styling
import ScrollIcon from '../assests/Icon/arr.svg'; // Replace with your actual path
import WhatsAppIcon from '../assests/Icon/wg.svg'; // Replace with your actual path

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {/* WhatsApp Icon: Always Visible */}
            <div className="whatsapp-icon">
                <img 
                    src={WhatsAppIcon} 
                    alt="WhatsApp" 
                    onClick={() => window.open('https://wa.me/9360790829', '_blank')} 
                />
            </div>

            {/* Scroll-to-Top Icon: Visible on Scroll */}
            <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
                <img src={ScrollIcon} alt="Scroll to top" />
            </div>
        </div>
    );
};

export default FloatingButtons;