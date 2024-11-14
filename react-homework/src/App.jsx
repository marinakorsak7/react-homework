import React, { PureComponent } from "react";
import "./styles/main.css";
import { CartProvider } from "./components/CartContext/CartContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

class App extends PureComponent {
  render() {
    return (
      <CartProvider>
        <div>
          <Header />
          <Hero />
          <Menu />
          <Footer />
        </div>
      </CartProvider>
    );
  }
}

export default App;
