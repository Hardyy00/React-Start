import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./item";
import showSlice from "./show";

const store = configureStore({
  reducer: {
    item: itemSlice,
    show: showSlice,
  },
});

export default store;
