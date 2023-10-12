import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
  expirationTime: null,
  isAuthenticated: false,
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authentication(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.expirationTime = action.payload.expirationTime;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userName = action.payload.userName;
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      state.isAuthenticated = false;
      state.userName = "";
      state.expirationTime = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
