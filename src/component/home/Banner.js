import React from "react";
import { useNavigate } from "react-router-dom";

import { FaCartArrowDown } from "react-icons/fa6";
import tabletImg from "../../img/slider-img.png";
import "animate.css";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="animate__animated animate__zoomIn banner__left">
        <h1>The Best Note Book Collection 2023</h1>
        <button className="logout" onClick={() => navigate("/shop")}>
          Shop Now <FaCartArrowDown className="arrow" />
        </button>
      </div>
      <div className="animate__animated animate__zoomIn banner__right">
        <img src={tabletImg} alt="tablet" />
      </div>
    </div>
  );
};

export default Banner;
