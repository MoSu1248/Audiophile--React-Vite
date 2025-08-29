import React, { useContext, useState, useEffect } from "react";
import "./AddProduct.scss";
import { CartContext } from "../../components/CartProvider/CartProvider";
import { motion } from "framer-motion";

export default function AddProduct({ product }) {
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [product.id]);

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

  const product_buttons = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <motion.div
      className="product__interactions"
      variants={product_buttons}
      initial="hidden"
      animate="show"
    >
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
    </motion.div>
  );
}
