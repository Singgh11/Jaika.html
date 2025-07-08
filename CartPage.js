import React, { useContext } from 'react';
import { CartContext } from './CartContext.js';
import { LocationContext } from './LocationContext.js';
import './CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { location } = useContext(LocationContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {location && (
        <p className="cart-location">
          📍 Delivering to: <strong>{location}</strong>
        </p>
      )}

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price per item: ₹{item.price}</p>
                <p>Item Total: ₹{item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr className="cart-divider" />
          <h3 className="cart-total">Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;
