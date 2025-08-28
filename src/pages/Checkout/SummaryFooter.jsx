import React from "react";
import "./SummaryFooter.scss";

export default function SummaryFooter({ formatNumber, cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const VAT_RATE = 0.15; // 15%
  const vat = total * VAT_RATE;
  const shipping = 50;
  const grandTotal = total + shipping;

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
      <button className="button">Continue & Pay</button>
    </div>
  );
}
