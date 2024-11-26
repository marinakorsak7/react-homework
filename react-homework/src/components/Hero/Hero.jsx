import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="menu-section">
      <div className="container">
        <h2>Browse our menu</h2>
        <p>Use our menu to place an order online, or <span className="phone-tooltip">phone</span> our store to place a pickup order. Fast and fresh food.</p>
      </div>
    </div>
  );
};

export default Hero;