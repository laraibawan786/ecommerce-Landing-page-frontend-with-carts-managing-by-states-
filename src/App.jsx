import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryCards from "./components/CategoryCards";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"; 
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";


function App() {
  

  return (
  <div className="font-sans">
      <Header />
      <HeroSection />
      <CategoryCards />
      <ProductList />
      <Cart />
      <Footer />
        <CheckoutModal/>
    </div>
  );
}

export default App;