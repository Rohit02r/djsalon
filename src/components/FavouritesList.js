// src/components/FavoritesList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../components/FavouritesContext'; // Adjust import path as needed
import products from '../../src/components/data/productsd'; // Import your products data
import './FavouritesList.css'; // Import CSS for styling

const FavoritesList = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  // Filter products based on favorites
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="favoritesList">
      <h1>Your Favorites</h1>
      <div className="results-grid">
        {favoriteProducts.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favoriteProducts.map(product => (
            <div
              key={product.id}
              className="result-item"
              onClick={() => navigate(`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`, { state: { product } })}
            >
              <img src={product.img} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price">₹ {product.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
