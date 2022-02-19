import {
    INCREMENT,
    DECREMENT,
    ASYNC_INCREMENT,
    CHANGE_THEME
} from "./types"

export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}
export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({
                type: ASYNC_INCREMENT
            })
        }, 2000);
    }

}

export function changeTheme(newtheme){
    return{
        type:CHANGE_THEME,
        payload:newtheme
    }

}