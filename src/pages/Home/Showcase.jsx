import React from "react";
import Speaker_zx9 from "../../assets/home/desktop/image-speaker-zx9.png";
import Speaker_zx7 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import Earphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import CircleBackground from "../../assets/home/desktop/pattern-circles.svg";
import "./Showcase.scss";
import { NavLink } from "react-router-dom";

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="wrapper">
        <div className="showcase__item-1">
          <img src={CircleBackground} alt="" />
          <div className="showcase__img">
            <img src={Speaker_zx9} alt="" />
          </div>
          <div className="showcase__item-1-content">
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <NavLink to={"/category/speakers/product/4"} className="button">
              See Product
            </NavLink>
          </div>
        </div>
        <div className="showcase__item-2">
          <div className="showcase__item-2-content">
            <h4>ZX7 SPEAKER</h4>
            <NavLink to={"/category/speakers/product/5"} className="button">
              See Product
            </NavLink>
          </div>
        </div>
        <div className="showcase__item-3">
          <div className="showcase__item-3-img">
            <img src={Earphones} alt="" />
          </div>
          <div className="showcase__item-3-content">
            <h4>YX1 EARPHONES</h4>
            <NavLink to={"/category/earphones/product/6"} className="button">
              See Product
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
