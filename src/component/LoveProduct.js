import React from "react";
import { useDispatch } from "react-redux";
import { loveListActions } from "../app/love/loveListSlice";
import { FaHeartCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import "animate.css";
import "./LoveProduct.css";

const LoveProduct = ({ id, image, name }) => {
  const dispatch = useDispatch();

  return (
    <div className="animate__animated animate__zoomIn loveproduct">
      <img src={image} alt="test" />
      <h4>{name}</h4>
      <FaHeartCircleCheck className="heartcircle" />
      <button onClick={() => dispatch(loveListActions.removeProdHandler(id))}>
        <FaRegCircleXmark className="xmark__second" />
      </button>
    </div>
  );
};

export default LoveProduct;
