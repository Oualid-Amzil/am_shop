import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../app/cart/cartSlice";
import { FaXmark } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";

import "animate.css";
import "./CartItem.css";

const CartItem = ({ id, image, name, title, price, quantity, totale }) => {
  const dispatch = useDispatch();

  return (
    <div className="animate__animated animate__slideInDown cartitem">
      <div className="cartitem__info">
        <img src={image} alt="item" />
        <div className="cartitem__title">
          <p>{name}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="item__price">
        <h5>Price:</h5>
        <h4>{`$${price}`}</h4>
      </div>
      <div className="item__quantity">
        <button
          onClick={() =>
            dispatch(
              cartActions.addProdHandler({
                id,
                image,
                name,
                title,
                price,
                quantity: 1,
              })
            )
          }
        >
          <FaPlus className="item__icon" />
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => dispatch(cartActions.subtractQuantityHandler(id))}
        >
          <FaMinus className="item__icon" />
        </button>
      </div>
      <div className="item__totale">
        <h5>Totale:</h5>
        <h4>{`$${totale}`}</h4>
      </div>
      <button
        className="item__delete"
        onClick={() => dispatch(cartActions.removeProdHandler(id))}
      >
        <FaXmark className="delete__icon" />
      </button>
    </div>
  );
};

export default CartItem;
