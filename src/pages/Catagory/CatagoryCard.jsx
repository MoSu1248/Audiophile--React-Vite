import React from "react";
import "./CatagoryCard.scss";
import { NavLink } from "react-router-dom";

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
              <NavLink
                className="button"
                to={`/category/${category.slug}/product/${p.id}`}
              >
                See Product
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
