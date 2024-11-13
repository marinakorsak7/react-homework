import React from 'react';
import './Button.css';

const Button = ({ label, isActive }) => {

    return (
        <button className={`menu-button ${isActive ? 'active' : ''}`} onClick={()=>{}}>
            {label}
        </button>
    );
};

export default Button;
