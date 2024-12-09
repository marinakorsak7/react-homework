import React, { PureComponent } from 'react';
import './Tabs.css';
import Button from '../Button/Button';

class Tabs extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(({ label, id, isActive }) => (
          <Button key={id} label={label} isActive={isActive} />
        ))}
      </div>
    );
  }
}

export default Tabs;