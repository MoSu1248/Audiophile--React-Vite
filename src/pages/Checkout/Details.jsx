import React from "react";
import "./Details.scss";

export default function Details() {
  return (
    <div className="form-section">
      <p className="form__header">Billing Details</p>
      <div className="form__grid-container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
}
