// src/Components.js/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🍽️ <Link to="/" className="brand-link">JAIKA</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/payment">Payment</Link>
      </div>
    </nav>
  );
}

export default Navbar;
