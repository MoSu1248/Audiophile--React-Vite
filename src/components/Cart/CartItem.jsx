import React from "react";
import "./CartItem.scss";
import CartCounter from "./CartCounter.jsx";

export default function CartItem({ increase, decrease, formatNumber, item }) {
  return (
    <div className="cart__item">
      <img src={item.image} alt="" className="cart__item-image" />
      <div className="cart__item-info">
        <p className="cart__item-name">{item.itemName}</p>
        <p className="cart__item-price">$ {formatNumber(item.price)}</p>
      </div>
      <CartCounter item={item} increase={increase} decrease={decrease} />
    </div>
  );
}
