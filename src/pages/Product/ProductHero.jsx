import React from "react";
import AddProduct from "./AddProduct";
import "./ProductHero.scss";

export default function ProductHero({ product }) {
  (999).toLocaleString(); // "999"
  (1000).toLocaleString(); // "1,000"
  (29999).toLocaleString(); // "29,999"

  function formatNumber(num) {
    return num.toLocaleString("en-US");
  }

  return (
    <div className="product__card">
      <div className="product__img">
        <img src={product.images.preview} alt="" />
      </div>

      <div className="product__content">
        <p className={product.status !== "New" ? "display" : "overline"}>
          New Product
        </p>
        <h2>
          {product.name} {product.categorySlug}
        </h2>
        <p className="product__description">{product.description}</p>
        <p className="product__price">${formatNumber(product.price)}</p>
        <AddProduct product={product} />
      </div>
    </div>
  );
}
