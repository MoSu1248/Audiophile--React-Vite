import React from "react";
import "./IncludedItems.scss"

export default function IncludedItems({ product }) {
  return (
    <div className="list__container">
      <h3>In The Box</h3>
      <ul className="list">
        {product.inTheBox.map((item) => (
          <li className="list__item" key={item.item}>
            <span>{item.quantity}x</span>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
}
