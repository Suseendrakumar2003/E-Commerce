// CartContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (newItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.title === newItem.title);
      if (existing) {
        return prev.map((item) =>
          item.title === newItem.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (title, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.title === title
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  // Context value
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook with safety check
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("❌ useCart must be used within a CartProvider");
  }
  return context;
};
