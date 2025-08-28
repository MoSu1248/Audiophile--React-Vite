import React from "react";

export default function Shipping() {
  return (
    <div className="form-section">
      <p className="form__header">Shipping Info</p>

      <div className="form__grid-container">
        <div className="form-group address-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="ZIP code"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
}
