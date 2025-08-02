import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryCards from "./components/CategoryCards";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <div className="font-sans">
        <Header />

        <HeroSection />

        <CategoryCards />

        <ProductList />

        <Cart />

        {/* Checkout Button */}
        <div className="flex justify-center my-10">
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Checkout
          </button>
        </div>

        {/* Checkout Modal */}
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

