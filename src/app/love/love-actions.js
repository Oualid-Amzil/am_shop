import axios from "axios";

import { uiActions } from "../uiSlice";
import { loveListActions } from "./loveListSlice";

export const sendLovedProds = (elements) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    dispatch(uiActions.addFirebaseError({ message: null }));
    try {
      await axios({
        method: "put",
        url: `
        https://am-shop-fcfb7-default-rtdb.firebaseio.com/
lovedList/
        ${userId}.json?auth=${token}`,
        data: elements,
      });
    } catch (error) {
      dispatch(uiActions.addFirebaseError({ message: error.message }));
    }
  };
};

export const getLovedProds = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    dispatch(uiActions.addFirebaseError({ message: null }));

    try {
      const response = await axios({
        method: "get",
        url: `
        https://am-shop-fcfb7-default-rtdb.firebaseio.com/
lovedList/
        ${userId}.json?auth=${token}
        `,
      });

      dispatch(
        loveListActions.replaceLovedProds({
          items: response.data || [],
        })
      );
    } catch (error) {
      dispatch(uiActions.addFirebaseError({ message: error.message }));
    }
  };
};
