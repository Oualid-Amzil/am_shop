import { createSlice } from "@reduxjs/toolkit";

const loveListSlice = createSlice({
  name: "module",
  initialState: {
    list: [],
  },
  reducers: {
    addProdHandler(state, action) {
      state.list = [action.payload, ...state.list];
    },
    removeProdHandler(state, action) {
      state.list = state.list.filter((ele) => ele.id !== action.payload);
    },
    replaceLovedProds(state, action) {
      state.list = action.payload.items;
    },
  },
});

export const loveListActions = loveListSlice.actions;

export default loveListSlice;
