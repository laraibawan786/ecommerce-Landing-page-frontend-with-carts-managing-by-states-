import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "../components/CheckoutModal";

const Cart = () => {
  const { state, updateQuantity, removeFromCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const cartItems = state?.cart || [];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQty = Math.max(item.quantity + delta, 1);
      updateQuantity(id, newQty);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <section id="cart" className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">PKR {item.price}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ✅ TOTAL DISPLAY */}
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: PKR {totalPrice}</h3>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        </>
      )}

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </section>
  );
};

export default Cart;
