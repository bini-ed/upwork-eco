import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>EON </h1>
        <div className="header__logo__span">
          <span>Aligner</span>
          <span>Enterprise</span>
        </div>
      </div>
      <p>Get started</p>
    </div>
  );
}

export default Header;
