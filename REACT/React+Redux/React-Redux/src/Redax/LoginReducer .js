import { loginUser, authAPI } from "../Api/Api"
import { stopSubmit } from "redux-form"

let defaultState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}


const LoginReducer = (state = defaultState, action) => {

    switch (action.type) {

        case "Set-User-Data":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state


    }
}

export const SetUserData = (userId, email, login, isAuth) => ({ type: "Set-User-Data", data: { userId, email, login, isAuth } })


// redux-thunk
export const getAuthUserData = () => (dispatch) => {

   return loginUser().then(res => {
        // console.log(res)
        if (res.resultCode === 0) {
            let { id, email, login } = res.data;
            dispatch(SetUserData(id, email, login, true))
        }

    })
}

// .then chgrelu hamr ka sinxronachnelu urish dev async await
export const login = (email, password, remebrMe) => async (dispatch) => {

     let res = await authAPI.login(email, password, remebrMe)
        if (res.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            // stopSubmit
            // erb sxal ban es frum login lineluch error chuych ta  
            // formi anuny=> email 
            let action = stopSubmit("email", { _error: "error email & password" })
            dispatch(action)

        }
}

export const logout = () => (dispatch) => {

    authAPI.logout().then(res => {
        if (res.resultCode === 0) {
            dispatch(getAuthUserData(null, null, null, false))
        }
    })
}
export default LoginReducer