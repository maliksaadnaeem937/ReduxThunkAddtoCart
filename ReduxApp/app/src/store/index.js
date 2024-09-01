import cartSlice from "./cartSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  devTools: true,
});

export default store;
