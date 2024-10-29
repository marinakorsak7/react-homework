import React from 'react';
import Button from '../Button/Button';
import './ItemCard.css';

const ItemCard = ({ item }) => {
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
                    <input type="number" defaultValue="1" className="item-quantity" />
                    <Button label='Add to card' isActive={true}></Button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;