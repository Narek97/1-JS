import { createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./ProfileReducer"
import DialogsReducer from "./DialogsReducer"
import SidebarReducer from "./SidebarReducer"
import UsersReducer from "./UsersReducer"
import LoginReducer from "./LoginReducer "
// vorpeszi serveri het kapy reduserum grenq
import thunkMiddleware from "redux-thunk"
// redux-form formov tvyalner uxarkelu hamar
import { reducer as formReducer } from 'redux-form'
import appReducer from "./AppReducer";


// combineReducers bolor redusernery miavorelu hamar
let reducers = combineReducers({
    ProfilePage:ProfileReducer, 
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer ,
    userPage:UsersReducer,
    login:LoginReducer,
    app:appReducer,
    
    // redux-form // partadir form:formReducer:
    form:formReducer

})

//createStore bolor statery u actionnery ogtagortelu hamar
// applyMiddleware redux-thunk het ashxatelu hamar vor server hardum uxarkenq
let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store
export default store