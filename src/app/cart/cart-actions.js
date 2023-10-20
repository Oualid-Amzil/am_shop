import axios from "axios";

import { uiActions } from "../uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartElements = ({
  products,
  totaleAmount,
  totaleQuantity,
}) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    const replacer = (key, value) => {
      const seen = new WeakSet();
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };

    const serializedData = JSON.stringify(
      {
        products,
        totaleAmount,
        totaleQuantity,
      },
      replacer
    );

    dispatch(uiActions.addFirebaseError({ message: null }));
    try {
      await axios({
        method: "put",
        url: `
        https://am-shop-fcfb7-default-rtdb.firebaseio.com/
cart/
        ${userId}.json?auth=${token}`,
        data: serializedData,
      });
    } catch (error) {
      dispatch(uiActions.addFirebaseError({ message: error.message }));
    }
  };
};

export const getCartElements = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    dispatch(uiActions.addFirebaseError({ message: null }));

    try {
      const response = await axios({
        method: "get",
        url: `
        https://am-shop-fcfb7-default-rtdb.firebaseio.com/
cart/
        ${userId}.json?auth=${token}
        `,
      });
      dispatch(
        cartActions.replaceCartHandler({
          products: response.data?.products || [],
          totaleAmount: response.data?.totaleAmount || 0,
          totaleQuantity: response.data?.totaleQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(uiActions.addFirebaseError({ message: error.message }));
    }
  };
};
