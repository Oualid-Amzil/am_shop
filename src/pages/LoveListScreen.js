import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoveProduct from "../component/LoveProduct";
import { sendLovedProds } from "../app/love/love-actions";

import "./LoveListScreen.css";

let isInitial = true;

const LoveListScreen = () => {
  const dispatch = useDispatch();

  const loveList = useSelector((state) => state.love.list);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendLovedProds(loveList));
  }, [loveList, dispatch]);

  return (
    <div className="lovelist">
      <h1>Products you love most:</h1>
      {loveList.length === 0 && (
        <div className="lovelist__empty">
          <h3>You have not loved any product</h3>
        </div>
      )}
      {loveList.length > 0 && (
        <div className="lovelist__products">
          {loveList.map((ele) => (
            <LoveProduct
              key={ele.id}
              id={ele.id}
              image={ele.image}
              name={ele.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoveListScreen;
