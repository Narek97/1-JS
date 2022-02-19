import {createStore,combineReducers} from "redux"
import CarReducer from './CarReducer'

let reducers = combineReducers({
    Car:CarReducer
})

let store = createStore(reducers)

export default store