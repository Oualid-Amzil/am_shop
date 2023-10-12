import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TopProduct from "../component/home/TopProduct";

import { products } from "../products";
import { sendLovedProds } from "../app/love/love-actions";
import { sendCartElements } from "../app/cart/cart-actions";
import "./ShopScreen.css";

let isInitial = true;

const ShopScreen = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("all products");

  const mainProducts = products.filter((ele) => {
    if (category === "all products") {
      return ele;
    }
    return ele.name === category;
  });

  const searchCategory = useSelector((state) => state.search.type);
  const cartProducts = useSelector((state) => state.cart.products);
  const totaleAmount = useSelector((state) => state.cart.totaleAmount);
  const totaleQuantity = useSelector((state) => state.cart.totaleQuantity);

  useEffect(() => {
    setCategory(searchCategory === "" ? "all products" : searchCategory);
  }, [searchCategory]);

  const loveList = useSelector((state) => state.love.list);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(
      sendCartElements({ products: cartProducts, totaleAmount, totaleQuantity })
    );
    dispatch(sendLovedProds(loveList));
  }, [totaleQuantity, cartProducts, totaleAmount, loveList, dispatch]);

  return (
    <div className="shop">
      <h1>PRODUCTS</h1>
      <div className="shop__content">
        <div className="shop__categories">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <button
                className={category === "all products" ? "active" : ""}
                onClick={() => setCategory("all products")}
              >
                All Products
              </button>
            </li>
            <li>
              <button
                className={category === "Tablet" ? "active" : ""}
                onClick={() => setCategory("Tablet")}
              >
                Tablet
              </button>
            </li>
            <li>
              <button
                className={category === "Smart Watch" ? "active" : ""}
                onClick={() => setCategory("Smart Watch")}
              >
                Smart Watch
              </button>
            </li>
            <li>
              <button
                className={category === "Headphone" ? "active" : ""}
                onClick={() => setCategory("Headphone")}
              >
                Headphone
              </button>
            </li>
            <li>
              <button
                className={category === "Camera" ? "active" : ""}
                onClick={() => setCategory("Camera")}
              >
                Camera
              </button>
            </li>
            <li>
              <button
                className={category === "Gaming" ? "active" : ""}
                onClick={() => setCategory("Gaming")}
              >
                Gaming
              </button>
            </li>
            <li>
              <button
                className={category === "Powerbank" ? "active" : ""}
                onClick={() => setCategory("Powerbank")}
              >
                Powerbank
              </button>
            </li>
          </ul>
        </div>
        {mainProducts.length === 0 && (
          <div className="shop__empty">
            <h3>{`There is no product with this name: _${category}_`}</h3>
          </div>
        )}
        {mainProducts.length > 0 && (
          <div className="shop__products">
            {mainProducts.map((ele) => (
              <TopProduct
                key={ele.id}
                id={ele.id}
                image={ele.image}
                name={ele.name}
                title={ele.title}
                price={ele.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopScreen;
