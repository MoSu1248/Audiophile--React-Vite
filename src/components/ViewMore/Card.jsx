import React from "react";
import "./Card.scss";
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";

export default function Card({ img, title, url }) {
  return (
    <div className="view__card">
      <div className="view__card-img">
        <img src={img} alt="" />
      </div>
      <h6>{title}</h6>
      <NavLink to={url}>
        Shop
        <img src={Arrow} alt="" className="arrow-icon" />
      </NavLink>
    </div>
  );
}
