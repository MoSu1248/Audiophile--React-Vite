import React from "react";
import "./ProductGallery.scss";

export default function ProductGallery({ product }) {
  return (
    <div className="gallery-grid">
      <img src={product.images.main[0]} alt="" className="grid-item-1" />
      <img src={product.images.main[1]} alt="" className="grid-item-2" />
      <img src={product.images.main[2]} alt="" className="grid-item-3" />
    </div>
  );
}
