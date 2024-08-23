import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
// import './Checkout.css';

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container py-5">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go back to shop</Link></p>
      ) : (
        <div className="checkout-items">
          {cart.map((item, index) => (
            <div key={index} className="checkout-item mb-4">
              <h4>{item.product.title}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹ {item.product.price}</p>
              <button className="btn btn-danger" onClick={() => handleRemoveItem(item.product.id)}>Remove</button>
              <hr />
            </div>
          ))}
          <button className="btn btn-secondary mt-4" onClick={handleClearCart}>Clear Cart</button>
          <button className="btn btn-primary mt-4">Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
