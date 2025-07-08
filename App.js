// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components.js/Navbar.js';
import Hero from './Components.js/Hero.js';
import CategorySection from './Components.js/CategorySection.js';
import CategoryItems from './Components.js/CategoryItems.js';
import CartPage from './Components.js/CartPage.js';
import { CartProvider } from './Components.js/CartContext.js';
import OfferSection from './Components.js/OfferSection.js';
import AboutSection from './Components.js/AboutSection.js';
import FooterSection from './Components.js/FooterSection.js';
import { LocationProvider } from './Components.js/LocationContext.js';
import Payment from './Components.js/Payment.js';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <OfferSection />
      <AboutSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <LocationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/category/:categoryName"
              element={
                <>
                  <Navbar />
                  <CategoryItems />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Navbar />
                  <CartPage />
                </>
              }
            />
            <Route
              path="/payment"
              element={
                <>
                  <Navbar />
                  <Payment />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </LocationProvider>
    </CartProvider>
  );
}

export default App;
