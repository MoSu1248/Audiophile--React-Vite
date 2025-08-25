import React from "react";
import ViewMore from "../../components/ViewMore/ViewMore";
import "./Home.scss";
import Showcase from "./Showcase";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="wrapper">
          <div className="hero__content">
            <p className="overline">New Product</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className="text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <button className="hero-btn">See Product</button>
          </div>
        </div>
      </section>

      <ViewMore />
      <Showcase />
      <About />
      <Footer />
    </div>
  );
}
