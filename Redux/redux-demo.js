const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// pass the reducer function to the store
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState(); // give the state's snapshot after it was updated
  console.log(latestState);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" }); // dispatch the action to the reducer function of the store, to get the state updated
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
