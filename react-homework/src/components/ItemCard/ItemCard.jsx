import React, { useRef, useContext } from 'react';
import './ItemCard.css';
import Button from '../Button/Button';
import { useCart } from '../CartContext/CartContext';

const ItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const quantityInput = useRef(null);

  const handleAddToCart = () => {
    const quantity = parseInt(quantityInput.current.value || 0);
    addToCart(quantity);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^\d]/g, "");
    event.target.value = filteredValue;
  };

  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <div className="item-info">
        <div className="item-top">
          <h3>{item.name}</h3>
          <span className="item-price">$ {item.price} USD</span>
        </div>
        <p>{item.description}</p>
        <div className="item-bottom">
          <input
            ref={quantityInput}
            type="text"
            defaultValue="1"
            className="item-quantity"
            onChange={handleChange}
          />
          <Button
            label="Add to cart"
            isActive={true}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;