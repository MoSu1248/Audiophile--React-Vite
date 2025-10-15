import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="about"
      variants={fadeIn}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ amount: 0.5 }}
    >
      <div className="wrapper">
        <div className="about__content">
          <h2>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="about__img"></div>
      </div>
    </motion.section>
  );
}
