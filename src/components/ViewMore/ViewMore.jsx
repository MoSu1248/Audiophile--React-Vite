import React from "react";
import Card from "./Card";
import HeadPhone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import EarPhone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import StaggeredSection from "../../components/Animation Snippets/StaggerSection";
import { motion } from "framer-motion";

import "./ViewMore.scss";
export default function ViewMore() {
  return (
    <section className="view">
      <div className="wrapper">
        <Card
          title={"Headphone"}
          img={HeadPhone}
          url={"/category/headphones"}
          index={1}
        />
        <Card
          title={"Speaker"}
          img={Speaker}
          url={"/category/speakers"}
          index={2}
        />
        <Card
          title={"Earphone"}
          img={EarPhone}
          url={"/category/earphones"}
          index={3}
        />
      </div>
    </section>
  );
}
