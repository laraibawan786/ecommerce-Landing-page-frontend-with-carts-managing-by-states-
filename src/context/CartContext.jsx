import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
   case "ADD_TO_CART":
  console.log("✅ ADD_TO_CART reducer reached!", action.payload);
  const existingItem = state.cart.find(item => item.id === action.payload.id);
  if (existingItem) {
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ✅ Helper functions
  const addToCart = (product) => {
    console.log("🛒 Added:", product);
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ 
        state, 
        dispatch, 
        addToCart,   
        removeFromCart, 
        updateQuantity 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
