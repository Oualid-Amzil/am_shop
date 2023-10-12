import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../app/cart/cartSlice";
import { moduleActions } from "../../app/moduleSlice";
import { loveListActions } from "../../app/love/loveListSlice";
import { FaRegHeart, FaRegEye, FaHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

import "animate.css";
import "./TopProduct.css";

const TopProduct = ({ id, image, name, title, price }) => {
  const dispatch = useDispatch();

  const loveList = useSelector((state) => state.love.list);

  const [isLoved, setIsLoved] = useState(loveList.find((ele) => ele.id === id));

  const cartProducts = useSelector((state) => state.cart.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [inCart, setInCart] = useState(
    cartProducts.find((ele) => ele.id === id)
  );

  return (
    <div className="animate__animated animate__zoomIn topProduct">
      {isAuthenticated && (
        <div className="topProduct__icons">
          <button
            disabled={inCart}
            onClick={() => {
              dispatch(
                cartActions.addProdHandler({
                  id,
                  image,
                  name,
                  title,
                  price,
                  quantity: 1,
                })
              );
              setInCart(true);
            }}
          >
            <GrCart className="topProduct__icon" />
          </button>
          <button
            onClick={() => {
              dispatch(moduleActions.showProdInfoHandler(true));
              dispatch(
                moduleActions.productHandler({ id, image, name, title, price })
              );
            }}
          >
            <FaRegEye className="topProduct__icon" />
          </button>
          <button
            onClick={() => {
              if (!isLoved) {
                dispatch(loveListActions.addProdHandler({ id, image, name }));
              } else dispatch(loveListActions.removeProdHandler(id));

              setIsLoved(!isLoved);
            }}
          >
            {isLoved ? (
              <FaHeart className="topProduct__icon" style={{ color: "red" }} />
            ) : (
              <FaRegHeart className="topProduct__icon" />
            )}
          </button>
        </div>
      )}
      <div className="topProduct__img">
        <img src={image} alt={name} />
      </div>
      <div className="topProduct__info">
        <p>{name}</p>
        <h3>{title}</h3>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
};

export default TopProduct;
