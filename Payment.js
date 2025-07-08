// src/Components.js/Payment.js
import React, { useContext, useState } from 'react';
import './Payment.css';
import { CartContext } from './CartContext';

function Payment() {
  const { cartItems } = useContext(CartContext) || { cartItems: [] };
  const [showPopup, setShowPopup] = useState(false);

  const calculateTotal = () => {
    const subtotal = (cartItems || []).reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const gst = subtotal * 0.10;
    return subtotal + gst;
  };

  const handleOrder = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      {(cartItems || []).length === 0 ? (
        <p>No items in cart. Please add items from the Cart page.</p>
      ) : (
        <>
          <ul>
            {(cartItems || []).map((item, index) => (
              <li key={index}>
                {item.name} (x{item.quantity || 1}) - ₹{item.price * (item.quantity || 1)}
              </li>
            ))}
          </ul>
          <p>Total (including 10% GST): ₹{calculateTotal().toFixed(2)}</p>
          <button onClick={handleOrder}>Order and Pay Now</button>
        </>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Order Placed! Okay</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;