import React from "react";
import "./CartHeader.scss"
export default function CartHeader({ remove, cart }) {
  return (
    <div className="cart__header">
      <h6>Cart ({cart.length})</h6>
      <button
        className={cart.length === 0 ? "hidden" : "remove-all__btn"}
        onClick={remove}
      >
        Remove All
      </button>
    </div>
  );
}
