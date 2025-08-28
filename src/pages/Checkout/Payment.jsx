import React from "react";

export default function Payment() {
  return (
    <div className="form-section">
      <p className="form__header">Payment Details</p>
      <div className="form__grid-container">
        <div className="form-group">
          <p className="payment__method-title">Payment Method</p>
        </div>
        <div className="form-group">
          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="e-money"
              className="radio__button"
            />
            <span className="custom-radio">e-Money</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="payment"
              value="cash"
              className="radio__button"
            />
            <span className="custom-radio">Cash on Delivery</span>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="moneyNo">e-Money Number</label>
          <input
            type="text"
            id="moneyNo"
            name="moneyNo"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin">e-Money PIN</label>
          <input
            type="text"
            id="pin"
            name="pin"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
}
