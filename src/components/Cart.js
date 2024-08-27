// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; // Import CSS for styling

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to shop</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item card mb-4">
              <div className="cart-item-content">
                <div className="cart-item-image-title">
                  <img src={item.product.img} alt={item.product.title} className="card-img" />
                  <h4 className="card-title">{item.product.title}</h4>
                </div>
                <div className="cart-item-details">
                  <p className="card-text">{item.product.description}</p>
                  <p className="price">₹ {item.product.price}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-primary mt-4">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
