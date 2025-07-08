// src/Components.js/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

// Debounce utility (optional, can be removed if causing issues)
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Safely initialize cart from localStorage
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
      }
      return [];
    } catch (e) {
      console.error('Error loading cart from localStorage:', e);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }
    } catch (e) {
      console.error('Error saving cart to localStorage:', e);
    }
  }, [cartItems]);

  // Add or increase quantity with debouncing
  const addToCart = debounce((item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        // Only increase quantity if it's the same item (e.g., same name or other identifier)
        if (existingItem.name === item.name) {
          return prev.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
              : cartItem
          );
        }
        // If different item with same id, add as new item
        return [...prev, { ...item, quantity: 1 }];
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, 300);

  // Remove by index
  const removeFromCart = (index) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  // Get quantity for one item
  const getItemQuantity = (id) => {
    const found = cartItems.find((i) => i.id === id);
    return found ? found.quantity || 0 : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems, // Ensure cartItems is provided
        addToCart,
        removeFromCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};