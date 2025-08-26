import React from "react";
import './Features.scss'
export default function Features({product}) {
  return (
    <div className="features">
      <h3>Features</h3>
      <p>{product.features[0].text_1}</p>
      <p>{product.features[0].text_2}</p>
    </div>
  );
}
