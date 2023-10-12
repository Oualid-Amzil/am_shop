import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/home/Banner";
import ProductNum from "../component/home/ProductNum";
import ShopProps from "../component/home/ShopProps";
import TopProduct from "../component/home/TopProduct";
import LastElement from "../component/home/LastElement";
import mobileImg from "../img/Mobile Phone.png";
import watchImg from "../img/smart watch.png";
import headPhoneImg from "../img/headphone.png";
import sliderImg from "../img/slider-img.png";
import { products } from "../products";

import { FiTruck } from "react-icons/fi";
import { BiDollar, BiHeadphone } from "react-icons/bi";
import { TbDiscount } from "react-icons/tb";

import { sendLovedProds } from "../app/love/love-actions";
import { sendCartElements } from "../app/cart/cart-actions";

import "./HomeScreen.css";

let isInitial = true;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const loveList = useSelector((state) => state.love.list);
  const cartProducts = useSelector((state) => state.cart.products);
  const totaleAmount = useSelector((state) => state.cart.totaleAmount);
  const totaleQuantity = useSelector((state) => state.totaleQuantity);

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
    <div className="home">
      <Banner />
      <div className="home__second">
        <div className="second__content circle">
          <ProductNum image={mobileImg} number="23" />
          <ProductNum image={watchImg} number="18" />
          <ProductNum image={headPhoneImg} number="56" />
          <ProductNum image={sliderImg} number="73" />
        </div>
        <div className="second__content square">
          <ShopProps
            icon={<FiTruck className="icon" />}
            title="Free Shipping"
            disc="Order above $1000"
          />
          <ShopProps
            icon={<BiDollar className="icon" />}
            title="Return & Refund"
            disc="Money Back Gauranty"
          />
          <ShopProps
            icon={<TbDiscount className="icon" />}
            title="Member Discount"
            disc="On every Order"
          />
          <ShopProps
            icon={<BiHeadphone className="icon" />}
            title="Customer Support"
            disc="Every Time Call Support"
          />
        </div>
      </div>
      <div className="topProducts">
        <h2>Top Products</h2>
        <div className="topProducts__content">
          {products.map((ele) => {
            if (ele.id <= 7) {
              return (
                <TopProduct
                  key={ele.id}
                  id={ele.id}
                  image={ele.image}
                  name={ele.name}
                  title={ele.title}
                  price={ele.price}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
      <LastElement />
    </div>
  );
};

export default HomeScreen;
