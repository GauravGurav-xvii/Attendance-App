import React from "react";
import "./Navbar.css";
import logo from "../../assets/nav-logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <img src={logo} alt="logo" className="nav-logo" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
