import React, { useState,useEffect,useRef } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { useDarkMode } from './Darkmode';
import CartIcon from '../assests/Icon/s.svg'; // Adjust the path as needed
import ProfileIcon from '../assests/Icon/a.svg'; // Adjust the path as needed
import Sidebar from './Sidebar'; // Import the Sidebar component
import './StickyNavbar.css';
import Logo from '../assests/Logo/croplogo.png'

const StickyNavbar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { darkMode } = useDarkMode(); // Use the dark mode context
  const sidebarRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Search for: ${searchTerm}`);
  };

  const handleProfileClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar expand="lg" className="shadow-sm p-2">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Navbar.Brand className="d-flex align-items-center">
              <img src={Logo} alt="Logo" width="40" height="40" className="mr-2" /> {/* Add the logo */}
              <span style={{ color: '#7A1CAC', fontWeight: 'bold' }}>DJ</span>
              <span style={{ color: '#000' }}> Salon</span> {/* Style for brand name */}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link active={location.pathname === '/'}>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services">
                  <Nav.Link active={location.pathname === '/services'}>Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/products">
                  <Nav.Link active={location.pathname === '/products'}>Products</Nav.Link>
                </LinkContainer>
              </Nav>
              <Form onSubmit={handleSearchSubmit} className="form-inline ml-3">
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>
              <Nav className="ml-auto d-flex align-items-center">
                <LinkContainer to="/cart">
                  <Nav.Link className="d-flex align-items-center">
                    <img src={CartIcon} alt="Cart" width="20" height="20" />
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={handleProfileClick} className="d-flex align-items-center">
                  <img src={ProfileIcon} alt="Profile" width="22" height="22" />
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={handleCloseSidebar} 
        ref={sidebarRef} // Attach ref to Sidebar
      />
    </div>
  );
};

export default StickyNavbar;