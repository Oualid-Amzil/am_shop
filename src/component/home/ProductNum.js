import React from "react";
import "animate.css";
import "./ProductNum.css";

const ProductNum = ({ image, number }) => {
  return (
    <div className="animate__animated animate__zoomIn productnum">
      <div className="productnum__image">
        <img src={image} alt="product" />
      </div>
      <h4>{number} products</h4>
    </div>
  );
};

export default ProductNum;
