import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../app/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { searchActions } from "../app/searchSlice";

import Nav from "./Nav";
import { FaTruckMoving, FaShoppingCart, FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const lovedProds = useSelector((state) => state.love.list);
  const cartProds = useSelector((state) => state.cart.products);
  const userName = useSelector((state) => state.auth.userName);

  useEffect(() => {
    const userData = localStorage.getItem("userInfo");

    if (userData) {
      const transformeData = JSON.parse(userData);

      if (
        transformeData.expirationDate <= new Date() ||
        !transformeData.token ||
        !transformeData.userId
      ) {
        return;
      }

      dispatch(
        authActions.authentication({
          token: transformeData.token,
          userId: transformeData.userId,
          expirationTime: transformeData.expirationDate,
          isAuthenticated: transformeData.isAuthenticated,
          userName: transformeData.userName,
        })
      );
    }
  }, [dispatch]);

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
          <input
            value={inputValue}
            type="search"
            placeholder="Search Your Product"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            onClick={() => {
              dispatch(searchActions.addTypeHandler(inputValue));
              setInputValue("");
              navigate("/shop");
            }}
          >
            <LuSearch className="search__icon" />
          </button>
        </div>
        {isAuthenticated && (
          <div className="heart__cart">
            <h3>{`Hello, ${userName}`}</h3>
            <button onClick={() => navigate("/lovelist")}>
              <FaHeart className="heart" />
              {lovedProds.length < 9 ? (
                <span>{lovedProds.length}</span>
              ) : (
                <span>+9</span>
              )}
            </button>
            <button onClick={() => navigate("/cart")}>
              <FaShoppingCart className="cart" />
              {cartProds.length > 9 ? (
                <span>+9</span>
              ) : (
                <span>{cartProds.length}</span>
              )}
            </button>
          </div>
        )}
      </div>
      <Nav />
    </div>
  );
};

export default Header;
