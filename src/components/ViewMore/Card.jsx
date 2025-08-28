import React from "react";
import "./Card.scss";
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";

export default function Card({ img, title, url }) {
  return (
    <NavLink className="view__card" to={url}>
      <div className="view__card-img">
        <img src={img} alt="" />
      </div>
      <h6>{title}</h6>
      <p>
        Shop
        <img src={Arrow} alt="" className="arrow-icon" />
      </p>
    </NavLink>
  );
}
