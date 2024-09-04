import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css'; 

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate(); 

 
  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };


  const handleItemClick = (item) => {
    navigate(`/products/${formatTitleForURL(item.product.title)}`, {
      state: { product: item.product },
    });
  };

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/djsalon/products">Go back to shop</a></p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div
              key={index}
              className="cart-item card mb-4 cart-item-link"
              onClick={() => handleItemClick(item)}
            >
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
          <button className="btc mt-2">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
