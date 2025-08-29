import React from "react";
import "./Hero.scss";
import { NavLink } from "react-router-dom";
import StaggeredSection from "../../components/Animation Snippets/StaggerSection";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">
        <StaggeredSection delay={0.2}>
          <div className="hero__content">
            <p className="overline">New Product</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className="text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <NavLink to={"/category/headphones/product/1"} className="hero-btn">
            See Product
          </NavLink>
        </StaggeredSection>
      </div>
    </section>
  );
}
