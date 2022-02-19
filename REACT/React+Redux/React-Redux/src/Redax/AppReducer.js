
import { getAuthUserData } from "./LoginReducer "

let defaultState = {
    initialized: false,

}


const appReducer = (state = defaultState, action) => {

    switch (action.type) {

        case "Set-Initialized":
            return {
                ...state,
                initialized: true,
               
            }
        default:
            return state


    }
}

export const initializedSucsess = () => ({ type: "Set-Initialized"})


// redux-thunk
export const initializApp= () => (dispatch) => {

    // cani der sax tvyalnery chi eke zagruzki nshan chuych ta
    let promis =  dispatch(getAuthUserData())
    Promise.all([promis])
    .then(()=>{
     
        dispatch(initializedSucsess())
    })


}
export default appReducer