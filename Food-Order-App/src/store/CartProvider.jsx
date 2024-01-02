import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // if an item already exists in a cart, then just increment or decrement its amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // updatedTotalAmount -= existingCartItem.price * existingCartItem.amount;

      updatedItems = [...state.items]; // make a new state array

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const foundItem = state.items.find((item) => item.id === action.id);

    const updatedAmount = state.totalAmount - foundItem.price;
    let updatedArray;

    if (foundItem.amount === 1) {
      updatedArray = state.items.filter((item) => item.id !== action.id);
    } else {
      foundItem.amount -= 1;

      updatedArray = [...state.items];
    }

    // if (updatedArray === null) updatedArray = [];

    // console.log(updatedArray);

    return { items: updatedArray, totalAmount: updatedAmount };
  }

  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    cartDispatcher({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatcher({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
