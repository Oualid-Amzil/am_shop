import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totaleAmount: 0,
    totaleQuantity: 0,
  },
  reducers: {
    addProdHandler(state, action) {
      let prodExist = state.products.find(
        (ele) => ele.id === action.payload.id
      );

      if (prodExist) {
        prodExist.quantity = prodExist.quantity + action.payload.quantity;
        prodExist.totale = prodExist.quantity * prodExist.price;
        state.totaleAmount =
          state.totaleAmount + action.payload.quantity * prodExist.price;
      } else {
        state.products = [
          {
            ...action.payload,

            totale: action.payload.price * action.payload.quantity,
          },
          ...state.products,
        ];
        state.totaleAmount =
          state.totaleAmount + action.payload.price * action.payload.quantity;
      }
      state.totaleQuantity = state.totaleQuantity + action.payload.quantity;
    },
    subtractQuantityHandler(state, action) {
      let prod = state.products.find((ele) => ele.id === action.payload);

      if (prod.quantity > 1) {
        prod.quantity = prod.quantity - 1;
        prod.totale = prod.totale - prod.price;
      } else if (prod.quantity === 1) {
        state.products = state.products.filter(
          (ele) => ele.id !== action.payload
        );
      }
      state.totaleAmount = state.totaleAmount - prod.price;
      state.totaleQuantity = state.totaleQuantity - 1;
    },
    removeProdHandler(state, action) {
      const product = state.products.find((ele) => ele.id === action.payload);

      state.products = state.products.filter(
        (ele) => ele.id !== action.payload
      );

      state.totaleAmount = state.totaleAmount - product.totale;
      state.totaleQuantity = state.totaleQuantity - product.quantity;
    },
    replaceCartHandler(state, action) {
      state.products = action.payload.products;
      state.totaleAmount = action.payload.totaleAmount;
      state.totaleQuantity = action.payload.totaleQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
