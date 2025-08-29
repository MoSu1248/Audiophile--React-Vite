import React, { useContext } from "react";
import { CartContext } from "../../components/CartProvider/CartProvider";
import SummaryList from "./SummaryList";
import SummaryFooter from "./SummaryFooter";
import "./Summary.scss";

export default function Summary() {
  const { cart } = useContext(CartContext);
  function formatNumber(num) {
    (999).toLocaleString();
    (1000).toLocaleString();
    (29999).toLocaleString();
    return num.toLocaleString("en-US");
  }
  return (
    <div className="summary">
      <h6 className="summary__header">Summary</h6>
      <SummaryList cart={cart} formatNumber={formatNumber} />
      <SummaryFooter cart={cart} formatNumber={formatNumber} />
    </div>
  );
}
