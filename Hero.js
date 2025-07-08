// src/components/Hero.js
import React, { useContext, useState } from 'react';
import { LocationContext } from './LocationContext.js';
import './Hero.css';

const Hero = () => {
  const { location, setLocation } = useContext(LocationContext);
  const [tempLocation, setTempLocation] = useState('');

  const handleSaveLocation = () => {
    if (tempLocation.trim() !== '') {
      setLocation(tempLocation.trim());
      setTempLocation('');
    }
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Delicious Food, Delivered Fast</h1>
        <p>Order from top restaurants near you</p>
        
        <div className="location-input">
          <input
            type="text"
            placeholder="Enter your location..."
            value={tempLocation}
            onChange={(e) => setTempLocation(e.target.value)}
          />
          <button onClick={handleSaveLocation}>Save</button>
        </div>

        {location && (
          <p className="location-confirm">📍 Got your location: <strong>{location}</strong></p>
        )}

        <div className="hero-buttons">
          <button className="primary">Explore Menu</button>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;