import React from "react";
import Summary from "./Summary";
import Form from "./Form";
import GoBackButton from "../../components/BackBtn/GoBackButton";
import "./CheckOut.scss";

export default function CheckOut() {
  return (
    <section className="checkOut">
      <div className="wrapper">
        <GoBackButton />
        <div className="checkOut__container">
          <Form />
          <Summary />
        </div>
      </div>
    </section>
  );
}
