import React, { useState,useEffect,useRef } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import CartIcon from '../assests/Icon/s.svg'; // Adjust the path as needed
import ProfileIcon from '../assests/Icon/a.svg'; // Adjust the path as needed
import Sidebar from './Sidebar'; // Import the Sidebar component
import './StickyNavbar.css';

const StickyNavbar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Apply dark mode class to body when darkMode state changes
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    // Close sidebar if clicked outside
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className='navbar'>
      <Navbar
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
        
        expand="lg"
        className="shadow-sm p-2 "
      >
        
        <div className="container-fluid ">
          <LinkContainer to="/">
            <Navbar.Brand >DJ Saloon</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link active={location.pathname === '/'}>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services">
                  <Nav.Link active={location.pathname === '/services'}>Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/products">
                  <Nav.Link active={location.pathname === '/products'}>Products</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link active={location.pathname === '/about'}>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link active={location.pathname === '/contact'}>Contact</Nav.Link>
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
              <Nav className="ml-auto">
                <Button variant="outline-secondary" onClick={toggleDarkMode}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
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

      <Sidebar ref={sidebarRef} isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};
export default StickyNavbar;