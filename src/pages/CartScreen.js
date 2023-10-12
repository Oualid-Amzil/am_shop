import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../component/CartItem";
import { sendCartElements } from "../app/cart/cart-actions";

import "./CartScreen.css";

let isInitial;

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartProducts = useSelector((state) => state.cart.products);
  const totaleAmount = useSelector((state) => state.cart.totaleAmount);
  const totaleQuantity = useSelector((state) => state.cart.totaleQuantity);

  useEffect(() => {
    if (isInitial) {
      return;
    }

    dispatch(
      sendCartElements({
        products: cartProducts,
        totaleAmount,
        totaleQuantity,
      })
    );
  }, [totaleQuantity, cartProducts, totaleAmount, dispatch]);

  return (
    <>
      {cartProducts.length === 0 && (
        <div className="cart__wrapper">
          <h2>Cart Is Empty</h2>
          <button className="shop__now" onClick={() => navigate("/shop")}>
            <span></span>Shop Now
          </button>
        </div>
      )}
      {cartProducts.length > 0 && (
        <div className="cart__container">
          <h1>Your Shopings:</h1>
          <div className="cart__products">
            {cartProducts.map((ele) => (
              <CartItem
                key={ele.id}
                id={ele.id}
                name={ele.name}
                title={ele.title}
                price={ele.price}
                image={ele.image}
                quantity={ele.quantity}
                totale={ele.totale}
              />
            ))}
          </div>
          <div className="totale">
            <h3>Total Amount:</h3>
            <h4>{`$${totaleAmount}`}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default CartScreen;
