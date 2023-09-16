import React from "react";
import Nav from "./Nav";
import { FaTruckMoving, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="first__ele">
        <FaTruckMoving className="truck" />
        <p>FREE Shipping when shopping upto $1000</p>
      </div>
      <div className="second__ele">
        <div className="logo">
          <h1>
            AM
            <GiShoppingBag className="bag" />
            Shop
          </h1>
        </div>
        <div className="search__bar">
          <input type="text" placeholder="Search Your Product" />
          <button>Search</button>
        </div>
        <div className="heart__cart">
          <FaRegHeart className="heart" />
          <FaShoppingCart className="cart" />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
