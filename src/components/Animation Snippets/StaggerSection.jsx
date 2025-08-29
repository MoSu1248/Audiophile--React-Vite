import { motion } from "framer-motion";
import React from "react";
import "./stagger.scss";

export default function StaggeredSection({ children, delay = 0 }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="stagger"
    >
      {React.Children.map(children, (c) => (
        <motion.div variants={child} className="stagger-child" >{c}</motion.div>
      ))}
    </motion.div>
  );
}
