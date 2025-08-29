import React from "react";
import ViewMore from "../../components/ViewMore/ViewMore";
import Showcase from "./Showcase";
import About from "../../components/About/About";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <ViewMore />
      <Showcase />
      <About />
    </div>
  );
}
