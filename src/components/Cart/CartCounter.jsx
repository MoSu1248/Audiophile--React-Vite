import React from "react";
import "./CartCounter.scss";

export default function CartCounter({ item, decrease, increase }) {
  return (
    <div className="counter cart-counter">
      <button
        className={item.quantity <= 1 ? "btn " : "btn "}
        onClick={() => decrease(item.id, item.quantity)}
      >
        −
      </button>
      <span className="count">{item.quantity}</span>
      <button className="btn " onClick={() => increase(item.id, item.quantity)}>
        +
      </button>
    </div>
  );
}
