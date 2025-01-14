import React, { useRef, ChangeEvent } from "react";
import "./ItemCard.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const dispatch = useDispatch();

  const quantityInput = useRef<HTMLInputElement>(null);

  const handleAddToCart = () => {
    const quantity = parseInt(quantityInput.current?.value || "0", 10);
    if (quantity > 0) {
      dispatch(
        addToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity,
          imageUrl: item.imageUrl,
        })
      );
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          <Button label="Add to cart" isActive={true} onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;