import React from "react";
import "./ViewProductButton.scss";
import { NavLink } from "react-router-dom";

export default function ViewProductButton({ url }) {
  return (
    <NavLink className="view__product-btn" to={url}>
      See Product
    </NavLink>
  );
}
