import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__list">
        <NavLink
          to="/home"
          style={{ fontFamily: "PT Serif" }}
          className={(navData) => (navData.isActive ? "active__navlink" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shopt"
          style={{ fontFamily: "PT Serif" }}
          className={(navData) => (navData.isActive ? "active__navlink" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          style={{ fontFamily: "PT Serif" }}
          className={(navData) => (navData.isActive ? "active__navlink" : "")}
        >
          about
        </NavLink>
        <NavLink
          to="/contact"
          style={{ fontFamily: "PT Serif" }}
          className={(navData) => (navData.isActive ? "active__navlink" : "")}
        >
          Contact
        </NavLink>
      </div>
      <div className="nav__auth">
        <h3>Login</h3>
        <BiLogInCircle className="logcircle" />
      </div>
    </div>
  );
};

export default Nav;
