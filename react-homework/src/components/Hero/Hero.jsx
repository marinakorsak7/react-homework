import React, { PureComponent } from 'react';
import Tabs from '../Tabs/Tabs';
import './Hero.css';

class Hero extends PureComponent {
  render() {
    return (
      <div className="menu-section">
        <div className="container">
          <h2>Browse our menu</h2>
          <p>Use our menu to place an order online, or <span className="phone-tooltip">phone</span> our store to place a pickup order. Fast and fresh food.</p>
          <div className="buttons-container">
            <Tabs items={[
                {label:'Dessert', isActive:true, id:0},
                {label:'Dinner', isActive:false, id:1},
                {label:'Breakfast', isActive:false, id:2},
            ]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;