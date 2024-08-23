// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

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
  <div key={index} className="cart-item mb-4">
    <h4>{item.product.title}</h4>
    <p>Quantity: {item.quantity}</p>
    <p>Price: ₹ {item.product.price}</p>
    <hr />
  </div>
))}

          <button className="btn btn-primary mt-4">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
