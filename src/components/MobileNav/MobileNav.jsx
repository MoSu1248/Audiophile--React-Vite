import React, { useState } from "react";
import "./MobileNav.scss";
import ViewMore from "../ViewMore/ViewMore";

export default function MobileNav() {

  return (
    <div className="mobile__nav">
      <div className="mobile__nav-container">
        <ViewMore />
      </div>
    </div>
  );
}
