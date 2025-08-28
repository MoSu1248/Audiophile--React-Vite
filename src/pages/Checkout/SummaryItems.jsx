import React from "react";
import CartItem from "../../components/Cart/CartItem";
import "./SummaryItems.scss";

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
        cart.map((item) => (
          <div key={item.id} className={"summary__item"}>
            <img src={item.image} alt="" className="summary__item-image" />
            <div className="summary__item-info">
              <p className="summary__item-name">{item.itemName}</p>
              <p className="summary__item-price">
                $ {formatNumber(item.price)}
              </p>
            </div>
            <p
              className={
                cart.length >= 4
                  ? "summary__item-quantity quantitiy-padding"
                  : "summary__item-quantity"
              }
            >
              x{item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
