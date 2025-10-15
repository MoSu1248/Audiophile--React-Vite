import React from "react";
import "./Copyright.scss";
import Socials from "./Socials";

export default function copyright() {
  return (
    <div className="copyright-container">
      <p className="copyright">Copyright 2021. All Rights Reserved</p>
      <Socials />
    </div>
  );
}
