import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import tabletImg from "../../img/slider-img.png";
import "./LastElement.css";

const LastElement = () => {
  const navigate = useNavigate();

  return (
    <div className="lastElement">
      <div className="lastElement__container">
        <div className="lastElement__left">
          <p>LATEST TECHNOLOGY ADDED</p>
          <h1>Apple iPad 10.2 9th Gen - 2023</h1>
          <h2>$ 986</h2>
          <button className="logout" onClick={() => navigate("/shop")}>
            Shop Now <FaCartArrowDown className="arrow" />
          </button>
        </div>
        <div className="lastElement__right">
          <img src={tabletImg} alt="tablet" />
        </div>
      </div>
    </div>
  );
};

export default LastElement;
