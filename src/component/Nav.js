import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { moduleActions } from "../app/moduleSlice";
import { Logout } from "../app/auth/auth-actions";
import { getLovedProds } from "../app/love/love-actions";
import { getCartElements } from "../app/cart/cart-actions";
import "./Nav.css";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getLovedProds());
      dispatch(getCartElements());
    }
  }, [dispatch, isAuthenticated]);

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
          to="/shop"
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

      {!isAuthenticated ? (
        <button
          className="logout"
          onClick={() => dispatch(moduleActions.showAuthHandler(true))}
        >
          LogIn
          <BiLogInCircle className="logcircle" />
        </button>
      ) : (
        <button className="logout" onClick={() => dispatch(Logout(navigate))}>
          <span></span>LogOut
        </button>
      )}
    </div>
  );
};

export default Nav;
