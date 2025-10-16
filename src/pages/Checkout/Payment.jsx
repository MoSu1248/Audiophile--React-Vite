import React, { useContext, useState } from "react";
import { CheckoutContext } from "../../components/CheckOutProvider/CheckOutProvider";

export default function Payment() {
  const { payment, setPayment, errors } = useContext(CheckoutContext);

  const [showEMoney, setShowEMoney] = useState(false);

  return (
    <div className="form-section">
      <p className="form__header">Payment Details</p>{" "}
      <div className="form__grid-container">
        <div className="form-group">
          <p className="payment__method-title">Payment Method</p>
        </div>
      {errors.method && <p className="error">{errors.method}</p>}

        <div className="form-group">
          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="e-money"
              className="radio__button"
              onChange={() => {
                setShowEMoney(true);
                setPayment({ ...payment, method: "e-money" });
              }}
            />
            <span className="custom-radio">e-Money</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="cash"
              className="radio__button"
              onChange={() => {
                setShowEMoney(false);
                setPayment({ ...payment, method: "cash" });
              }}
            />
            <span className="custom-radio">Cash on Delivery</span>
          </label>
        </div>

        {showEMoney && (
          <div className="form-group">
            <label htmlFor="moneyNo">e-Money Number</label>
            <input
              type="text"
              id="moneyNo"
              name="moneyNo"
              placeholder="Phone Number"
              className="form-input"
              value={payment.moneyNo || ""}
              onChange={(e) =>
                setPayment({ ...payment, [e.target.name]: e.target.value })
              }
            />
          </div>
        )}
        {showEMoney && (
          <div className="form-group">
            <label htmlFor="pin">e-Money PIN</label>
            <input
              type="text"
              id="pin"
              name="pin"
              placeholder="Phone Number"
              className="form-input"
              value={payment.pin || ""}
              onChange={(e) =>
                setPayment({ ...payment, [e.target.name]: e.target.value })
              }
            />{" "}
            {errors.pin && <p className="error">{errors.pin}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
