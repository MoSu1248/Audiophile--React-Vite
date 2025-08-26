import React from "react";
import AddProduct from "./AddProduct";
import './ProductHero.scss'

export default function ProductHero({ product }) {
  return (
    <div className="product__card">
      <div className="product__img">
        <img src={product.images.preview} alt="" />
      </div>

      <div className="product__content">
        <p className={product.status !== "New" ? "display" : "overline"}>
          New Product
        </p>
        <h2>{product.name} </h2>
        <p className="product__description">{product.description}</p>
        <AddProduct />
      </div>
    </div>
  );
}
