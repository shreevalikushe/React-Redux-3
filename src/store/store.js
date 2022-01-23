import { createStore } from "redux";
import { reducer } from "./reducer";
import { applyMiddleware } from "redux";
const logger1 = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("Received an action which is a function");
    return action(store.dispatch);
  }
  next(action);
};
export const store = createStore(reducer, applyMiddleware(logger1));

console.log(store.getState());
