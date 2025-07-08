import React, { useContext, useState } from 'react';
import { offers } from './data.js';
import './OfferSection.css';
import { CartContext } from './CartContext.js';

const OfferSection = () => {
  const { addToCart } = useContext(CartContext);

  // State for tracking which items were added
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart({ ...item, price: item.newPrice });
    setAddedItems((prev) => [...prev, item.id]);

    // Remove "Added" message after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id));
    }, 2000);
  };

  return (
    <div className="offers-container">
      <h2 className="offers-heading">🎁 Today's Special Offers</h2>
      <div className="offers-grid">
        {offers.map((item) => (
          <div className="offer-card" key={item.id}>
            <img src={item.image} alt={item.name} className="offer-image" />
            <h3>{item.name}</h3>
            <p className="price">
              <span className="old-price">₹{item.oldPrice}</span>
              <span className="new-price">₹{item.newPrice}</span>
            </p>
            {addedItems.includes(item.id) ? (
              <div className="added-message">✅ Added to Cart!</div>
            ) : (
              <button
                className="offer-btn"
                onClick={() => handleAddToCart(item)}
              >
                Order Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;

