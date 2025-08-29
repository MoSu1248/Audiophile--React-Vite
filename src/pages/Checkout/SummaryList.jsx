import React from "react";
import CartItem from "../../components/Cart/CartItem";
import "./SummaryItems.scss";
import SummaryItem from "./SummaryItem";
export default function SummaryItems({ cart }) {
  function formatNumber(num) {
    (999).toLocaleString();
    (1000).toLocaleString();
    (29999).toLocaleString();
    return num.toLocaleString("en-US");
  }

  return (
    <div
      className={
        cart.length >= 4 ? "cart__list cart__list-padding" : "cart__list"
      }
    >
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, i) => (
          <SummaryItem
            cart={cart}
            formatNumber={formatNumber}
            item={item}
            index={i}
            key={i}
          />
        ))
      )}
    </div>
  );
}
