import React, { useContext } from "react";
import { CheckoutContext } from "../../components/CheckOutProvider/CheckOutProvider";
import "./Details.scss";

export default function Details() {
  const { details, setDetails, errors } = useContext(CheckoutContext);

  return (
    <div className="form-section">
      <p className="form__header">Billing Details</p>
      {errors.name && <p className="error">{errors.name}</p>}
      <div className="form__grid-container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="form-input"
            value={details.name || ""}
            onChange={(e) =>
              setDetails({ ...details, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
            value={details.email || ""}
            onChange={(e) =>
              setDetails({ ...details, [e.target.name]: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
            value={details.phone || ""}
            onChange={(e) =>
              setDetails({ ...details, [e.target.name]: e.target.value })
            }
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>
    </div>
  );
}
