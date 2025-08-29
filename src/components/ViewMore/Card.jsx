import React from "react";
import "./Card.scss";
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Card({ img, title, url, index }) {
  return (
    <motion.div
      className="view__card"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      viewport={{ once: true, amount: 1 }}
    >
      <NavLink to={url} className="view__card-link">
        <div className="view__card-img">
          <img src={img} alt="" />
        </div>
        <h6>{title}</h6>
        <p>
          Shop
          <img src={Arrow} alt="" className="arrow-icon" />
        </p>
      </NavLink>
    </motion.div>
  );
}
