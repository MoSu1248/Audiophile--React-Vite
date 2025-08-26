import React from "react";
import "./RelatedProducts.scss";
import { categoriesDetails } from "../../data/index";
import { NavLink } from "react-router-dom";

export default function RelatedProducts({ productId, slug }) {
  const allProducts = Object.values(categoriesDetails).flatMap(
    (category) => category.products
  );

  const filterredProducts = allProducts.filter(
    (p) => p.id !== Number(productId)
  );

  const displayProduct = filterredProducts.slice(0, 3);

  console.log(displayProduct);

  return (
    <div className="related">
      <h3>You May Also Like</h3>
      <div className="related__container">
        {displayProduct.map((p) => (
          <div key={p.id}  className="related__card">
            <img src={p.images.preview} alt="" />
            <h5>{p.name}</h5>
            <NavLink to={`/category/${p.categorySlug}/product/${p.id}`} className='button'>
              See Product
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
