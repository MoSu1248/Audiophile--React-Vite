import React, { useContext } from "react";
import "./RelatedProducts.scss";
import { categoriesDetails } from "../../data/index";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../components/CartProvider/CartProvider";

export default function RelatedProducts({ productId, slug }) {
  const allProducts = Object.values(categoriesDetails).flatMap(
    (category) => category.products
  );

  const { deviceType } = useContext(CartContext);

  const filterredProducts = allProducts.filter(
    (p) => p.id !== Number(productId)
  );

  const displayProduct = filterredProducts.slice(0, 3);

  return (
    <div className="related">
      <h3>You May Also Like</h3>
      <div className="related__container">
        {displayProduct.map((p) => {
          const preview =
            p.images.product?.[deviceType] || p.images.product?.desktop;
          return (
            <div key={p.id} className="related__card">
              <div className="related-img__container">
                <img src={preview} alt="" />
              </div>
              <h5>{p.name}</h5>
              <NavLink
                to={`/category/${p.categorySlug}/product/${p.id}`}
                className="button"
              >
                See Product
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
