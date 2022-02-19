import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducer/prductReducers";
import {cartReducer} from "./reducer/cartReducer";
import {orderReducer} from "./reducer/orderReducers";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
        order: orderReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
