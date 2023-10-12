import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "module",
  initialState: {
    type: "",
  },
  reducers: {
    addTypeHandler(state, action) {
      state.type = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
