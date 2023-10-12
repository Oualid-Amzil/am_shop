import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../app/cart/cartSlice";
import { moduleActions } from "../app/moduleSlice";
import { FaXmark } from "react-icons/fa6";

import { FaPlus, FaMinus } from "react-icons/fa6";
import Module from "../component/UI/Module";
import { sendCartElements } from "../app/cart/cart-actions";
import "animate.css";
import "./ProductInfo.css";

let isInitial = true;

const ProductInfo = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.products);
  const totaleAmount = useSelector((state) => state.cart.totaleAmount);
  const totaleQuantity = useSelector((state) => state.cart.totaleQuantity);
  const prod = useSelector((state) => state.module.product);

  const prodExist = cartProducts.find((ele) => ele.id === prod.id);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (isInitial) {
      return;
    }
    dispatch(
      sendCartElements({ products: cartProducts, totaleAmount, totaleQuantity })
    );
  }, [totaleQuantity, cartProducts, totaleAmount, dispatch]);

  return (
    <Module>
      <div className="animate__animated animate__zoomIn  productinfo__container">
        <button
          onClick={() => dispatch(moduleActions.hideProdInfoHandler(false))}
        >
          <FaXmark className="xmark" />
        </button>
        {prodExist && (
          <span className=" feedback">{`For now you have ${prodExist.quantity} elements in your cart`}</span>
        )}
        <div className="image__container">
          <img src={prod?.image} alt="test" />
          <div className="prod__quantity">
            <button onClick={() => setQuantity(quantity + 1)}>
              <FaPlus className="plus" />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                if (quantity === 0) {
                  return;
                }
                setQuantity(quantity - 1);
              }}
            >
              <FaMinus className="minus" />
            </button>
          </div>
        </div>
        <div className="prod__info">
          <p>{prod?.name}</p>
          <h2>{prod?.title}</h2>
          <p>
            A Screen Everyone Will Love Whether your family is streaming or
            video chatting width friends tablet AB.
          </p>
          <h3>{`$ ${prod?.price}`}</h3>
          <button
            onClick={() => {
              if (quantity === 0) {
                return;
              }
              dispatch(cartActions.addProdHandler({ ...prod, quantity }));
              setQuantity(0);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Module>
  );
};

export default ProductInfo;
