import { configureStore } from "@reduxjs/toolkit";
import moduleSlice from "./moduleSlice";
import searchSlice from "./searchSlice";
import loveListSlice from "./love/loveListSlice";
import cartSlice from "./cart/cartSlice";
import uiSlice from "./uiSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    module: moduleSlice.reducer,
    search: searchSlice.reducer,
    love: loveListSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});
