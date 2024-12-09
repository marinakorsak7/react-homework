import React, { PureComponent, createRef } from "react";
import "./ItemCard.css";
import Button from "../Button/Button";
import { useCart } from "../CartContext/CartContext";

class ItemCard extends PureComponent {
  constructor(props) {
    super(props);
    this.quantityInput = createRef();
  }

  handleAddToCart = () => {
    const quantity = parseInt(this.quantityInput.current.value || 0);
    this.props.addToCart(quantity);
  };

  handleChange = (event) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^\d]/g, "");
    event.target.value = filteredValue;
  };

  render() {
    const { item } = this.props;
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
              ref={this.quantityInput}
              type="text"
              defaultValue="1"
              className="item-quantity"
              onChange={this.handleChange}
            />
            <Button
              label="Add to cart"
              isActive={true}
              onClick={this.handleAddToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => {
  const { addToCart } = useCart();
  return <ItemCard {...props} addToCart={addToCart} />;
};
