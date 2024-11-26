import React from 'react';
import './Button.css';

const Button = ({ label, isActive, onClick }) => {
  return (
    <button className={`menu-button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;