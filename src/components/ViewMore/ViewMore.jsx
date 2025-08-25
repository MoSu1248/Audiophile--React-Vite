import React from "react";
import Card from "./Card";
import HeadPhone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import EarPhone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import './ViewMore.scss'
export default function ViewMore() {
  return (
    <section className="view">
      <div className="wrapper">
        <Card title={"Headphone"} img={HeadPhone} to={""} />
        <Card title={"Speaker"} img={Speaker} to={""} />
        <Card title={"Earphone"} img={EarPhone} to={""} />
      </div>
    </section>
  );
}
