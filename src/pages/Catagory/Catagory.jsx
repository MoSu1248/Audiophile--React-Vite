import React from "react";
import { categoriesDetails } from "../../data/index";
import { useParams } from "react-router-dom";
import CatagoryHero from "./CatagoryHero";
import CatagoryCard from "./CatagoryCard";
import ViewMore from "../../components/ViewMore/ViewMore";
import About from "../../components/About/About";

import "./Catagory.scss";

export default function Catagory() {
  const { slug } = useParams();
  const category = categoriesDetails[slug];

  if (!category) return <p>Category not found</p>;

  return (
    <section className="products">
      <CatagoryHero title={category.category} />
      <CatagoryCard category={category} />
      <ViewMore />
      <About />
    </section>
  );
}
