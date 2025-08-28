import React from "react";
import "./Logo.scss";
import LogoImg from "../../assets/shared/desktop/logo.svg";
export default function Logo() {
  return (
    <div className="logo">
      <img src={LogoImg} alt="" />
    </div>
  );
}
