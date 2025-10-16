import React, { useState } from "react";
import "./MobileNav.scss";
import ViewMore from "../ViewMore/ViewMore";

export default function MobileNav({ setOpen }) {
  return (
    <div className="mobile__nav">
      <div className="mobile__nav-container">
        <ViewMore setOpen={setOpen} />
      </div>
    </div>
  );
}
