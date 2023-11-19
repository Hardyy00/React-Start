// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

// export const authActions = authSlice.actions;

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       show: state.show,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.incrementor,
//       show: state.show,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       show: state.show,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       show: !state.show,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
