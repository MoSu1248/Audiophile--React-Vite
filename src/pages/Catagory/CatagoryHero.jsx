import React from "react";
import './CatagoryHero.scss'
export default function CatagoryHero({title}) {
  return (
    <div className="catagory__hero">
      <div className="wrapper">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
