import React from "react";
import "./CartFooter.scss";
import { NavLink } from "react-router-dom";

export default function CartFooter({ formatNumber, total, close }) {
  return (
    <div className="cart__footer">
      <div className="cart__total">
        <p>Total</p>
        <p className="cart__total-value">$ {formatNumber(total)}</p>
      </div>
      <NavLink
        className={total === 0 ? "cart__button disabled" : "cart__button"}
        to={total === 0 ? " " : "/checkout"}
        onClick={close}
      >
        Checkout
      </NavLink>
    </div>
  );
}
