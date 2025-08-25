import React from "react";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import "./Cart.scss";

export default function cart() {
  return (
    <div className="cart-containter">
      <img src={CartIcon} alt="" />
    </div>
  );
}
