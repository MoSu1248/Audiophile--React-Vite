import React from "react";
import "./CatagoryCard.scss";
import ViewProductButton from "../../components/ViewProductButton/ViewProductButton";

export default function CatagoryCard({ category }) {
  return (
    <div className="product__card-container">
      <div className="wrapper">
        {category.products.map((p) => (
          <div className="product__card" key={p.id}>
            <div className="product__img">
              <img src={p.images.preview} alt="" />
            </div>
            <div className="product__content">
              <p className={p.status !== "New" ? "display" : "overline"}>
                New Product
              </p>
              <h2>{p.name} </h2>
              <p>{p.description}</p>
              <ViewProductButton
                url={`/category/${category.slug}/product/${p.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
