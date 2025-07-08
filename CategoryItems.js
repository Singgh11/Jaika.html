import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext.js';
import './CategoryItems.css';

const allItems = {
  pizza: [
    { id: 1, name: 'Margherita', price: 250, image: '/images/mggpzza.jpg' },
    { id: 2, name: 'Farmhouse', price: 300, image: '/images/fmpzz.jpg' },
    { id: 3, name: 'Paneer Pizza', price: 270, image: '/images/paneerpz.jpg' }
  ],
  burger: [
    { id: 4, name: 'Veg Burger', price: 120, image: '/images/vegburgr.jpg' },
    { id: 5, name: 'Cheese Burger', price: 150, image: '/images/cheeseburgr.jpg' },
    { id: 6, name: 'Crispy Burger', price: 140, image: '/images/crispybrgr.jpg' }
  ],
  biryani: [
    { id: 7, name: 'Hyderabadi Biryani', price: 220, image: '/images/hydrabdibir.jpg' },
    { id: 8, name: 'Veg Dum Biryani', price: 200, image: '/images/vegdumbir.jpg' },
    { id: 9, name: 'Paneer Biryani', price: 230, image: '/images/paneerbir.jpg' }
  ],
  'south indian': [
    { id: 10, name: 'Masala Dosa', price: 90, image: '/images/dosa.jpg' },
    { id: 11, name: 'Idli Sambar', price: 80, image: '/images/idlismbr.jpg' },
    { id: 12, name: 'Uttapam', price: 100, image: '/images/uttpam.jpg' }
  ],
  desserts: [
    { id: 13, name: 'Ice Cream', price: 60, image: '/images/icecream.jpg' },
    { id: 14, name: 'Gulab Jamun', price: 50, image: '/images/gulabjamun.jpg' },
    { id: 15, name: 'Cake Slice', price: 80, image: '/images/cakeslice.jpg' }
  ],
  chinese: [
    { id: 16, name: 'Veg Noodles', price: 110, image: '/images/noodles.jpg' },
    { id: 17, name: 'Fried Rice', price: 120, image: '/images/friedrice.jpg' },
    { id: 18, name: 'Spring Rolls', price: 90, image: '/images/springroll.jpg' }
  ],
  snacks: [
    { id: 19, name: 'Samosa', price: 20, image: '/images/samosa.jpg' },
    { id: 20, name: 'Kachori', price: 25, image: '/images/kachori.jpg' },
    { id: 21, name: 'Pakoda', price: 30, image: '/images/pakoda.jpg' }
  ],
};

function CategoryItems() {
  const { addToCart, cartItems } = useContext(CartContext);
  const { categoryName } = useParams();
  const items = allItems[categoryName] || [];

  const getQuantityFromCart = (id) => {
    const found = cartItems.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, id: item.id || Date.now() + Math.random() }); // Fallback id if needed
  };

  return (
    <div className="category-items-page">
      <h2>{categoryName.toUpperCase()} Menu</h2>
      <div className="items-grid">
        {items.map((item) => {
          const qty = getQuantityFromCart(item.id);
          return (
            <div className="item-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="quantity-section">
                {qty > 0 && (
                  <p style={{ marginBottom: '6px' }}>
                    In cart: <strong>{qty}</strong>
                  </p>
                )}
                <button onClick={() => handleAddToCart(item)}>
                  {qty > 0 ? 'Add More' : 'Add to Cart'}
                </button>
              </div>
              <p className="price">₹{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryItems;