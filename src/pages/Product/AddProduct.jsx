import React from "react";
import "./AddProduct.scss";
export default function AddProduct() {
  return (
    <div className="product__interactions">
      <div className="counter">
        <button className="btn decrement disabled" value="decrement">
          −
        </button>
        <span className="count">1</span>
        <button className="btn increment" value="increment">
          +
        </button>
      </div>
      <button className="product__btn">Add to cart</button>
    </div>
  );
}
