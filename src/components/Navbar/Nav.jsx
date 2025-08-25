import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link">Home</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Headphones</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Speakers</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Earphones</a>
        </li>
      </ul>
    </div>
  );
}
