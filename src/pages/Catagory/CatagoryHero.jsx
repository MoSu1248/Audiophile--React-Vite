import React from "react";
import "./CatagoryHero.scss";
import StaggeredSection from "../../components/Animation Snippets/StaggerSection";

export default function CatagoryHero({ title }) {
  return (
    <div className="catagory__hero">
      <div className="wrapper">
        <StaggeredSection className = "catagory__hero-stagger">
          <h2>{title}</h2>
        </StaggeredSection>
      </div>
    </div>
  );
}
