import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import './StickyNavbar.css';

const StickyNavbar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Search for: ${searchTerm}`);
  };

  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg" className="shadow-sm">
      <div className="container-fluid">
        <Navbar.Brand href="/">DJ Saloon</Navbar.Brand>
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
            <Form inline onSubmit={handleSearchSubmit} className="form-inline">
              <FormControl 
                type="text" 
                placeholder="Search" 
                value={searchTerm} 
                onChange={handleSearchChange} 
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default StickyNavbar;
