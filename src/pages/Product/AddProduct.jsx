import React, { useContext, useState } from "react";
import "./AddProduct.scss";
import { CartContext } from "../../components/CartProvider/CartProvider";
export default function AddProduct({ product }) {
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function onAdditem() {
    const item = {
      id: product.id,
      itemName: product.name,
      price: product.price,
      image: product.images.cart,
      quantity: count,
    };
    addItem(item);
  }

  return (
    <div className="product__interactions">
      <div className="counter">
        <button
          className={count <= 1 ? "btn disabled" : "btn "}
          onClick={decrease}
        >
          −
        </button>
        <span className="count">{count}</span>
        <button className="btn " onClick={increase}>
          +
        </button>
      </div>
      <button className="product__btn" onClick={onAdditem}>
        Add to cart
      </button>
    </div>
  );
}
