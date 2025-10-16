import React, { useContext } from "react";
import SummaryItems from "./SummaryList";
import { CartContext } from "../../components/CartProvider/CartProvider";
import checkoutIcon from "../../assets/checkout/icon-order-confirmation.svg";
import "./CheckOutConfirmation.scss";
import { NavLink } from "react-router-dom";

export default function CheckOutConfirmation({ handleClose }) {
  const { grandTotal, cart } = useContext(CartContext);
  const cartCount = cart.length - 1;

  function formatNumber(num) {
    (999).toLocaleString();
    (1000).toLocaleString();
    (29999).toLocaleString();
    return num.toLocaleString("en-US");
  }

  return (
    <div className="confirmation">
      <div className="confirmation-container">
        <div>
          <img src={checkoutIcon} alt="" />
        </div>

        <div className="confimation-content">
          <h2>Thank You for your order</h2>
          <p>You will recieve an email confirmation shortly</p>

          <div className="confirmation-content__container">
            <div className="confirmation-info">
              <SummaryItems cart={cart.slice(0)} />
              {cartCount >= 1 && (
                <div className="otherItems">
                  <p>and {cartCount} other item(s)</p>
                </div>
              )}
            </div>
            <div className="total-container">
              <p className="total-text">Grand Total </p>
              <p className="grandTotal">${formatNumber(grandTotal)}</p>
            </div>
          </div>
        </div>
        <NavLink
          to={"/"}
          className="button"
          onClick={() => {
            handleClose();
          }}
        >
          Back to home
        </NavLink>
      </div>
    </div>
  );
}
