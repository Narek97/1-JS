import { createWrapper, Context } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { reducer, RootState } from "./reducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    // I require this only in dev environment
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (context) => {
  return createStore(reducer, bindMiddleware([thunk]));
};

// const makeStore = (context: Context) =>
//   createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
