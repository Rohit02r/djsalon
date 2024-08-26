import React, { useState,useEffect,useRef } from 'react';

import {Navbar,Nav,Form,FormControl,Button,Dropdown} from 'react-bootstrap';

import {useNavigate,NavLink} from 'react-router-dom';
import { useDarkMode } from './Darkmode';
import products from './data/productsd'; // Import your products data
import services from './data/servicesd';
import CartIcon from '../assests/Icon/s.svg'; // Adjust the path as needed
import ProfileIcon from '../assests/Icon/a.svg'; // Adjust the path as needed
import Sidebar from './Sidebar'; // Import the Sidebar component
import './StickyNavbar.css';
import Logo from '../assests/Logo/croplogo.png'


const StickyNavbar = () => {
 
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const { darkMode } = useDarkMode();
  const sidebarRef = useRef(null);
  const suggestionsRef = useRef(null);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 0) {
      const lowercasedTerm = term.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(lowercasedTerm)
      );
      const filteredServices = services.filter(service =>
        service.title.toLowerCase().includes(lowercasedTerm)
      );
      setSuggestions([...filteredProducts, ...filteredServices]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    setSuggestions([]);
  };

  const handleProfileClick = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (sidebarRef.current && !sidebarRef.current.contains(event.target)) ||
        (suggestionsRef.current && !suggestionsRef.current.contains(event.target))
      ) {
        setIsSidebarOpen(false);
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar expand="lg" className="shadow-lg p-2">
        <div className="container-fluid">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <img src={Logo} alt="Logo" width="40" height="40" className="mr-2" />
            <span style={{ color: '#7A1CAC', fontWeight: 'bold', marginLeft: '4px' }}>DJ</span>
            <span style={{ color: '#000' }}> Salon</span>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              <Nav className="mr-auto">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Home
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Services
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Products
                </NavLink>
              </Nav>
              <Form onSubmit={handleSearchSubmit} className="form-inline ml-3 search-form d-none d-lg-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button type="submit" variant="outline-success">Search</Button>
                {suggestions.length > 0 && (
                  <Dropdown.Menu ref={suggestionsRef} show className="search-suggestions">
                    {suggestions.map((item, index) => (
                      <Dropdown.Item key={index} href={`/search?query=${searchTerm}`} className='ss'>
                        <img src={item.img} alt={item.title} width="30" height="30" />
                        {item.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                )}
              </Form>
              <Nav className="ml-auto d-flex align-items-center d-none d-lg-flex">
                <NavLink to="/cart" className="d-flex align-items-center">
                  <img src={CartIcon} alt="Cart" width="20" height="20" />
                </NavLink>
                <Nav.Link onClick={handleProfileClick} className="d-flex align-items-center">
                  <img src={ProfileIcon} alt="Profile" width="22" height="22" />
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="mobile-search d-flex d-lg-none px-3 py-2">
        <Form onSubmit={handleSearchSubmit} className="form-inline w-100">
          <FormControl
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-100"
          />
          <Button type="submit" variant="outline-success" className="ml-2">Search</Button>
        </Form>
        {suggestions.length > 0 && (
          <Dropdown.Menu ref={suggestionsRef} show className="search-suggestions-mobile">
            {suggestions.map((item, index) => (
              <Dropdown.Item key={index} href={`/search?query=${searchTerm}`}>
                <img src={item.img} alt={item.title} width="30" height="30" />
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        )}
        <div className="mobile-icons d-flex justify-content-end align-items-center mt-2 w-100">
          <NavLink to="/cart" className="d-flex align-items-center">
            <img src={CartIcon} alt="Cart" width="20" height="20" />
          </NavLink>
          <Nav.Link onClick={handleProfileClick} className="d-flex align-items-center ml-3">
            <img src={ProfileIcon} alt="Profile" width="22" height="22" />
          </Nav.Link>
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        ref={sidebarRef}
      />
    </div>
  );
};

export default StickyNavbar;