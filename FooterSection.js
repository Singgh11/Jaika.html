import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Zaika</h3>
        <p>Bringing authentic taste to your doorstep.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#offers">Offers</a>
          <a href="/cart">Cart</a>
        </div>
        <p className="footer-copy">© 2025 Zaika. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
