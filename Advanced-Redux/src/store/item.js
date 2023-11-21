import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, changed: false };

const itemSlice = createSlice({
  name: "items",
  initialState,

  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    add(state, action) {
      state.changed = true;
      const newItem = action.payload;
      state.totalQuantity++;
      const foundItem = state.items.find((item) => item.id === newItem.id);

      if (foundItem) {
        foundItem.quantity++;
        foundItem.totalPrice += foundItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },

    remove(state, action) {
      state.changed = true;
      state.totalQuantity--;
      const id = action.payload;
      const foundItem = state.items.find((item) => item.id === id);

      foundItem.quantity--;
      foundItem.totalPrice -= foundItem.price;
      if (foundItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
