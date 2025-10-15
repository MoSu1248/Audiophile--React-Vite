import React, { useEffect, useState } from "react";
import "./CatagoryCard.scss";
import ViewProductButton from "../../components/ViewProductButton/ViewProductButton";

export default function CategoryCard({ category }) {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    function updateWindowWidth() {
      const width = window.innerWidth;
      if (width <= 901) setDeviceType("tablet");
      else if (width <= 650) setDeviceType("mobile");
      else setDeviceType("desktop");
    }

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <div className="product__card-container">
      <div className="wrapper">
        {category.products.map((p) => {
          const preview =
            p.images.preview?.[deviceType] || p.images.preview?.desktop;
          return (
            <div className="product__card" key={p.id}>
              <div className="product__img">
                <img src={preview} alt={p.name} />
              </div>
              <div className="product__content">
                <p className={p.status !== "New" ? "display" : "overline"}>
                  New Product
                </p>
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <ViewProductButton
                  url={`/category/${category.slug}/product/${p.id}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
