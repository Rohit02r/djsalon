import React, { useRef, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal navigation
import './Sidebar.css';

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={ref}>
      <div className="sidebar-header">
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/account">Your Account</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
  );
});

export default Sidebar;
