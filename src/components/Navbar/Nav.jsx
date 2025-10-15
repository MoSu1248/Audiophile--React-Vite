import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={"/"} className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/category/headphones" className="nav__link">
            Headphones
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/category/speakers"} className="nav__link">
            Speakers
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/category/earphones"} className="nav__link">
            Earphones
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
