import React from "react";
import "./Navbar.css";
import Asity from "../../assets/asityLogo.svg";

const Navbar = () => {
  return (
    <div class="Container">
      <div className="left">
        <img src={Asity} />
      </div>
      <div className="center">
        <ul className="menu">
          <li className="listItem">Services</li>
          <li className="listItem">About Us</li>
          <li className="listItem">Case Studies</li>
          <li className="listItem">Contact Us</li>
        </ul>
      </div>
      <div className="right">
        <button>Sign In . Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
