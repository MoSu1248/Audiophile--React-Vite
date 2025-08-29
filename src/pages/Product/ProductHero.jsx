import React from "react";
import AddProduct from "./AddProduct";
import "./ProductHero.scss";
import { motion } from "framer-motion";

export default function ProductHero({ product }) {
  (999).toLocaleString(); // "999"
  (1000).toLocaleString(); // "1,000"
  (29999).toLocaleString(); // "29,999"

  function formatNumber(num) {
    return num.toLocaleString("en-US");
  }

  const product_img = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
    },
  };

  const product_header = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
    },
  };

  const product_body = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <div className="product__card">
      <motion.div
        className="product__img"
        variants={product_img}
        initial="hidden"
        animate="show"
      >
        <img src={product.images.preview} alt="" />
      </motion.div>
      <div className="product__content">
        <motion.div
          className="product__header"
          variants={product_header}
          initial="hidden"
          animate="show"
        >
          <p className={product.status !== "New" ? "display" : "overline"}>
            New Product
          </p>
          <h2>
            {product.name} {product.categorySlug}
          </h2>
        </motion.div>
        <motion.div
          className="product__body"
          variants={product_body}
          initial="hidden"
          animate="show"
        >
          <p className="product__description">{product.description}</p>
          <p className="product__price">${formatNumber(product.price)}</p>
        </motion.div>
        <AddProduct product={product} />
      </div>
    </div>
  );
}
