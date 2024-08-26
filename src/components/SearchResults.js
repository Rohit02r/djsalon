import React from 'react';
import './SearchResults.css';
import { useLocation } from 'react-router-dom';
import products from '../components/data/productsd'; // Import your products data
import services from '../components/data/servicesd'; // Import your services data

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query').toLowerCase();

  const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(query)
  );

  const filteredServices = services.filter(service =>
      service.title.toLowerCase().includes(query)
  );

  return (
      <div className="results-container">
          <div className="results-dropdown">
              {/* Show message if no results found */}
              {filteredProducts.length === 0 && filteredServices.length === 0 ? (
                  <p>No results found</p>
              ) : (
                  <>
                      {filteredProducts.length > 0 && (
                          <>
                              <h2>Products</h2>
                              <div className="results-grid">
                                  {filteredProducts.map(product => (
                                      <div key={product.id} className="result-item">
                                          <img src={product.img} alt={product.title} />
                                          <div>
                                              <h3>{product.title}</h3>
                                              <p>{product.description}</p>
                                              <p className="price">₹{product.price}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </>
                      )}
                      {filteredServices.length > 0 && (
                          <>
                              <h2>Services</h2>
                              <div className="results-grid">
                                  {filteredServices.map(service => (
                                      <div key={service.id} className="result-item">
                                          <img src={service.img} alt={service.title} />
                                          <div>
                                              <h3>{service.title}</h3>
                                              <p>{service.description}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </>
                      )}
                  </>
              )}
          </div>
      </div>
  );
};

export default SearchResults;