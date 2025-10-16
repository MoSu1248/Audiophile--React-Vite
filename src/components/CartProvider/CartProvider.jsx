import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevCart, { ...item }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    function updateWindowWidth() {
      const width = window.innerWidth;
      if (width <= 650) setDeviceType("mobile");
      else if (width <= 900) setDeviceType("tablet");
      else setDeviceType("desktop");
    }

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const VAT_RATE = 0.15; // 15%
  const vat = total * VAT_RATE;
  const shipping = 50;
  const grandTotal = total + shipping;

  const removeAll = () => setCart([]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        removeAll,
        deviceType,

        vat,
        shipping,
        total,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
