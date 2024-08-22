import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css';


const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
  
    <div className="product-details container py-5">
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} className="product-image mb-4" />
      <p>{product.description}</p>
      <p><strong>Price: ₹ {product.price}</strong></p>
      <div className="quantity-controls">
        <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
        <span className="quantity mx-3">{quantity}</span>
        <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
      </div>
      <button className="btn btn-primary mt-4">
        Buy
      </button>
    </div>
    
  );
};

export default ProductDetails;
