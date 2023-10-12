import { createSlice } from "@reduxjs/toolkit";

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    showInfo: false,
    showAuth: false,
    product: {},
  },
  reducers: {
    showProdInfoHandler(state, action) {
      state.showInfo = action.payload;
    },
    hideProdInfoHandler(state, action) {
      state.showInfo = action.payload;
    },
    showAuthHandler(state, action) {
      state.showAuth = action.payload;
    },
    hideAuthHandler(state, action) {
      state.showAuth = action.payload;
    },
    productHandler(state, action) {
      state.product = action.payload;
    },
  },
});

export const moduleActions = moduleSlice.actions;

export default moduleSlice;
