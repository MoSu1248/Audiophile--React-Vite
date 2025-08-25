import React from "react";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import './Socials.scss'
export default function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <img src={Facebook} alt="Facebook" />
        </li>
        <li>
          <img src={Twitter} alt="Twitter" />
        </li>
        <li>
          <img src={Instagram} alt="Instagram" />
        </li>
      </ul>
    </div>
  );
}
