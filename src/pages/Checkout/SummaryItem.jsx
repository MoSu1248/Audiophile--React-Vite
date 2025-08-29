import React from "react";
import { motion } from "framer-motion";

export default function SummaryItem({ item, formatNumber, cart, index }) {
  const summary_item = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeIn", delay: 0.1 * (index + 1) },
    },
  };

  return (
    <motion.div
      className={"summary__item"}
      initial="hidden"
      animate="show"
      variants={summary_item}
    >
      <img src={item.image} alt="" className="summary__item-image" />
      <div className="summary__item-info">
        <p className="summary__item-name">{item.itemName}</p>
        <p className="summary__item-price">$ {formatNumber(item.price)}</p>
      </div>
      <p
        className={
          cart.length >= 4
            ? "summary__item-quantity quantitiy-padding"
            : "summary__item-quantity"
        }
      >
        x{item.quantity}
      </p>
    </motion.div>
  );
}
