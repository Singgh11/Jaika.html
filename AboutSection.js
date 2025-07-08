import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <h2>About Zaika</h2>
      <p>
        Welcome to <strong>Zaika</strong> – your gateway to authentic Indian flavors! 
        We proudly serve customers in India and abroad, delivering carefully crafted dishes 
        that celebrate the rich culinary traditions of our country.
      </p>
      <p>
        Our chefs use only the freshest ingredients and time-honored recipes to bring you 
        meals that are bursting with taste, quality, and hygiene. Every bite tells a story 
        of love, tradition, and passion for great food.
      </p>
      <p className="highlight">
        Our services are also available in Hyderabad, Mumbai, and Varanasi!
      </p>

      <div className="city-gallery">
        <div className="city-card">
          <img
            src="/images/hydrabad.jpg"
            alt="Hyderabad"
          />
          <h3>Hyderabad</h3>
          <p>
            Known for its rich heritage and iconic biryanis, Zaika brings the authentic 
            taste of Hyderabad to your table.
          </p>
        </div>
        <div className="city-card">
          <img
            src="/images/mumbai.jpg"
            alt="Mumbai"
          />
          <h3>Mumbai</h3>
          <p>
            From street food to fine dining, experience the vibrant and diverse flavors of 
            Mumbai with Zaika.
          </p>
        </div>
        <div className="city-card">
          <img
            src="/images/banaras.jpg"
            alt="Varanasi"
          />
          <h3>Varanasi</h3>
          <p>
            Savor the spiritual essence and traditional cuisine of Varanasi, crafted with 
            care by Zaika.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


