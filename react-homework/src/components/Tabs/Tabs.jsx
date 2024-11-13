import React from 'react';
import './Tabs.css';
import Button from '../Button/Button';

const Tabs = ({ items }) => {

    return (
        <div>{items.map(({label, id, isActive})=><Button key={id} label={label} isActive={isActive}></Button> )}</div>
        
    );
};

export default Tabs;
