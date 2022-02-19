import {
    INCREMENT,
    DECREMENT,
    ASYNC_INCREMENT,
    CHANGE_THEME
} from "./types"

import {
    combineReducers
} from "redux"

function countReducer(state = 0, action) {

    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    } else if (action.type === ASYNC_INCREMENT) {
        return state + 5
    }

    return state
}

const initialTheneState = {
    value: 'Light'
}

function theameReducer(state = initialTheneState, action) {
    console.log(action)
    switch (action.type) {
        
        case CHANGE_THEME: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }

}

export const rootReducer = combineReducers({
    counter: countReducer,
    theame: theameReducer
})