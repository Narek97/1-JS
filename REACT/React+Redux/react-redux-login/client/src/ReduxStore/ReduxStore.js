import { createStore, combineReducers,applyMiddleware } from "redux";
import LoginReducer from "./LoginReducer";
import RegReducer from './RegReducer';
// thunkMiddleware -asinxron hardumner uxarkelu hamar
import thunkMiddleware from "redux-thunk"
//combineReducers- miavorel bolor reducernery 
let reducers = combineReducers({
    Login:LoginReducer,
    Reg:RegReducer
})
// createStore - bolor componentnerin reduxsy hasaneli dardnelu hamatr ,applyMiddleware - asinxron funkciayi hamar
let store = createStore(reducers,applyMiddleware(thunkMiddleware))
export default store