import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart-icon.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header: FC = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="header container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/company">Company</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div className="cart-icon">
        <Link to="/order">
          <img src={cart} alt="Cart" />
          <span className="cart-counter">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
