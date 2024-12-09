import React from 'react';
import './Tabs.css';
import Button from '../Button/Button';

const Tabs = ({ items, onChange, activeItem }) => {
  return (
    <div className="tabs-container">
      {items.map(({ label, id, value }) => (
        <Button
          key={id}
          label={label}
          isActive={activeItem === value}
          onClick={() => onChange(value)}
        />
      ))}
    </div>
  );
};

export default Tabs;