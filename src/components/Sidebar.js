import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for internal navigation
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
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
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <div className="sidebar-header">
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/your-account">Your Account</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
