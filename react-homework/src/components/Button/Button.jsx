import React, { PureComponent } from 'react';
import './Button.css';

class Button extends PureComponent {
  render() {
    const { label, isActive, onClick } = this.props;
    return (
      <button className={`menu-button ${isActive ? 'active' : ''}`} onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
