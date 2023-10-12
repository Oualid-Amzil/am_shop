import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__ele first">
        <h1>
          AM
          <GiShoppingBag className="bag" />
          Shop
        </h1>
        <p>I am a frontEnd developper creating websites an apps with Reactjs</p>
        <div className="footer__icons">
          <button>
            <FaFacebookF className="footer__icon" />
          </button>
          <button>
            <FaYoutube className="footer__icon" />
          </button>
          <button>
            <FaTwitter className="footer__icon" />
          </button>
          <button>
            {" "}
            <FaInstagram className="footer__icon" />
          </button>
        </div>
      </div>

      <div className="footer__ele third">
        <h2>Pages</h2>
        <ul>
          <li>
            <NavLink
              to="/home"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Terma & Condition
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer__ele second">
        <h2>My Account</h2>
        <ul>
          <li>
            <NavLink
              to="/acount"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shipping"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Shipping
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/return"
              style={{ fontFamily: "PT Serif" }}
              className={(navData) =>
                navData.isActive ? "active__footerlink" : ""
              }
            >
              Return
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
