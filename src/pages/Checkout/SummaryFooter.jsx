import React, { useContext } from "react";
import "./SummaryFooter.scss";
import { CartContext } from "../../components/CartProvider/CartProvider";

export default function SummaryFooter({ formatNumber, cart }) {
  const { vat, shipping, total, grandTotal } = useContext(CartContext);

  return (
    <div className="summary-text__container">
      <p className="summary-text">
        Total <span>${formatNumber(total)}</span>
      </p>
      <p className="summary-text">
        Shipping <span>${formatNumber(shipping)}</span>
      </p>
      <p className="summary-text">
        VAT (INCLUDED) <span>${formatNumber(vat)}</span>
      </p>
      <p className="summary-text">
        Grand Total
        <span className="grandTotal">${formatNumber(grandTotal)}</span>
      </p>
      <button type="submit" className="button">
        Continue & Pay
      </button>
    </div>
  );
}
