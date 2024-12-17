import React, { FC } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart-icon.png";
import { useCart } from "../CartContext/CartContext";

interface HeaderProps {
    setCurrentPage: (page: "home" | "login") => void;
}

const Header: FC<HeaderProps> = ({ setCurrentPage }) => {
  const { cartCount } = useCart();

  return (
    <header className="header container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home" onClick={() => setCurrentPage("home")}>
          Home
        </a>
        <a href="#menu">Menu</a>
        <a href="#company">Company</a>
        <a href="#login" onClick={() => setCurrentPage("login")}>
          Login
        </a>
      </nav>
      <div className="cart-icon">
        <a href="#cart">
          <img src={cart} alt="Cart" />
          <span className="cart-counter">{cartCount}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
