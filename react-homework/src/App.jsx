import React, { useState } from "react";
import "./styles/main.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/CartContext/CartContext";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <CartProvider>
      <Header setCurrentPage={setCurrentPage} />
      <div>
        {currentPage === "login" ? (
          <Login onLoginSuccess={() => setCurrentPage("home")} />
        ) : (
          <Home setCurrentPage={setCurrentPage} />
        )}
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
