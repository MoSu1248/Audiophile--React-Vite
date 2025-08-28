import React from "react";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Details from "./Details";
import './Form.scss'
export default function Form() {
  return (
    <form className="form__wrapper">
      <h3>Check Out</h3>
      <Details />
      <Shipping />
      <Payment />
    </form>
  );
}
