import React, { useState, FC } from "react";
import "./styles/main.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/CartContext/CartContext";

type Page = "home" | "login";

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <CartProvider>
      <Header setCurrentPage={setCurrentPage} />
      <div>
        {currentPage === "login" ? (
          <Login onCancel={() => setCurrentPage("home")} />
        ) : (
          <Home />
        )}
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
