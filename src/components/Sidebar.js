import React, { useRef, useEffect, forwardRef } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar = forwardRef(({ isOpen, onClose, recentItems = [] }, ref) => {

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
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={(node) => { 
      sidebarRef.current = node; 
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    }}>
      <div className="sidebar-header">
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink 
            to="/account" 
            className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-links'} 
            onClick={onClose}
          >
            Your Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/favorites" 
            className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-links'} 
            onClick={onClose}
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-links'} 
            onClick={onClose}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-links'} 
            onClick={onClose}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/faq" 
            className={({ isActive }) => isActive ? 'nav-link actives' : 'nav-links'} 
            onClick={onClose}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
