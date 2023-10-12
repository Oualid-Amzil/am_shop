import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { errorMessage: "", isLoading: false, firebaseError: "" },
  reducers: {
    error(state, action) {
      state.errorMessage = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    addFirebaseError(state, action) {
      state.firebaseError = action.payload.message;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
