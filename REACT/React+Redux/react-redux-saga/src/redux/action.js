import {
    CREATE_POST,
    FETCH_POST,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT
} from "./types";

export function createPost(post) {
    // console.log(post)
    return {
        type: CREATE_POST,
        payload: post
    }
}


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}


export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload:text
        })

        setTimeout(()=>{
            dispatch(hideAlert())
        },3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

// asinxron hardum
export function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await res.json()
            // asinxron ashxatanqi hamar grum enq dispatch
            dispatch({
                type: FETCH_POST,
                payload: json
            })
            dispatch(hideLoader())

        } catch (e) {
            dispatch(showAlert("server ne otvechaet"))
            dispatch(hideLoader())
        }
    }
}