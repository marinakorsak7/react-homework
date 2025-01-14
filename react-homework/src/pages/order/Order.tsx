import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateItemQuantity, removeFromCart } from "../../redux/cartSlice";
import "./Order.css";
import Button from "../../components/Button/Button";

const Order: FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [street, setStreet] = useState<string>("");
  const [house, setHouse] = useState<string>("");
  const dispatch = useDispatch();

  const handleOrder = () => {
    if (!street || !house) {
      alert("Please fill in all the fields!");
      return;
    }
    alert("Order submitted successfully!");
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="order-background">
      <div className="order-container container">
        <h2>Finish your order</h2>
        {items.length === 0 ? (
          <p className="order-empty">Your cart is empty.</p>
        ) : (
          <div className="order-items">
            {items.map((item) => (
              <div key={item.id} className="order-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="order-item-image"
                />
                <div className="order-item-details">
                  <h3>{item.name}</h3>
                </div>
                <p className="order-item-price">${item.price.toFixed(2)} USD</p>
                <div className="order-item-quantity">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="order-item-input"
                  />
                </div>
                <button
                  className="order-item-remove"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        {items.length > 0 && (
          <div className="order-form">
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="house">House</label>
              <input
                type="text"
                id="house"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                placeholder=""
                required
              />
            </div>
            <div className="order-button">
              <Button label="Order" isActive={true} onClick={handleOrder} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
