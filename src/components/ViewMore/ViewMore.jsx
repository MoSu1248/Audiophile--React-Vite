import React from "react";
import Card from "./Card";
import HeadPhone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import EarPhone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import StaggeredSection from "../../components/Animation Snippets/StaggerSection";
import { motion } from "framer-motion";

import "./ViewMore.scss";
export default function ViewMore({ setOpen }) {
  const catagoryButtons = [
    { title: "Headphone", img: HeadPhone, url: "/category/headphones" },
    { title: "Speaker", img: Speaker, url: "/category/speakers" },
    { title: "Earphone", img: EarPhone, url: "/category/earphones" },
  ];

  return (
    <section className="view">
      <div className="wrapper">
        {catagoryButtons.map((item, index) => (
          <Card
            title={item.title}
            img={item.img}
            url={item.url}
            key={index}
            setOpen={setOpen}
          />
        ))}
      </div>
    </section>
  );
}
