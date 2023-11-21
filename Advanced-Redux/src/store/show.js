import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, notification: null };

const showSlice = createSlice({
  name: "show",
  initialState,

  reducers: {
    toggle(state) {
      state.show = !state.show;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const showActions = showSlice.actions;

export default showSlice.reducer;
