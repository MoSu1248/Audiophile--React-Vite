import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();



export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addItem = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => {
        item.id !== id;
      })
    );
  };

  const removeAll = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
}
