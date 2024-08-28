import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // Retrieve product from location state
  const product = location.state?.product;

  console.log('Product Data:', product); // Debugging

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-details container py-5">
      <div className="cont">
        <div className='pdalign'>
          <h2>{product.title}</h2>
          <img src={product.img} alt={product.title} className="product-image mb-4" />
        </div>
        <div className='pddesc'>
          <p>{product.description}</p>
          <p><strong>Price: ₹ {product.price}</strong></p>
          <div className="quantity-controls">
            <button className="btn bti" onClick={handleDecrement}>-</button>
            <span className="quantity mx-3">{quantity}</span>
            <button className="btn bti" onClick={handleIncrement}>+</button>
          </div>
          <button className="btn btn-primary mt-4" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
