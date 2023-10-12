import React from "react";
import "./ShopProps.css";

const ShopProps = ({ icon, title, disc }) => {
  return (
    <div className="shopProps">
      {icon}
      <div className="shopProps__ele">
        <h3>{title}</h3>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default ShopProps;
