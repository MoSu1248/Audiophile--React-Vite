import React from "react";
import "./Card.scss"
import Arrow from '../../assets/shared/desktop/icon-arrow-right.svg'

export default function Card({ img, title, to }) {
  return (
    <div className="view__card">
      <div className="view__card-img">
        <img src={img} alt="" />
      </div>
      <h6>{title}</h6>
          <a href="">Shop <img src={Arrow} alt="" className="arrow-icon"/></a>
    </div>
  );
}
