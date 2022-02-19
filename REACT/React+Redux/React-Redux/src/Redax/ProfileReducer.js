import { getProfil, profileAPI } from "../Api/Api";

// store
let defaultState = {
    posts: [
        // { id: 1, message: "hello1", like: 6 },
        // { id: 2, message: "hello hihi", like: 4 },
    ],
    profile: null,
    status: ""
 
}
// Reducer
const ProfileReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "Add-Post":
            let newPost = {
                id: 1,
                message: action.newPostBody,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],

            };
        case "Change-New-Post-Text":
            return {
                ...state,
                newPostText: action.newText
            };
        case "Set-User-Profile":
            return {
                ...state,
                profile: action.profile
            };
        case "Set-Status":
            return {
                ...state,
                status: action.status
            };
        case "Set-Photo-Sucess":
            
            return {
                ...state,
                profile: {...state.profile,photos:action.photos}
            };
        default: {
            return state
        }
    }

}

// action
export const addPostActionCreator = (newPostBody) => ({ type: "Add-Post", newPostBody })
export const setUserProfile = (profile) => ({ type: "Set-User-Profile", profile })
export const setStatus = (status) => ({ type: "Set-Status", status })
export const setPhotoSucess = (photo) => ({ type: "Set-Photo-Sucess", photo })


// kap serveri het (redux-thunk)
export const getUserProfile = (userID) => {
    return (dispatch) => {
        getProfil(userID).then(res => {

            dispatch(setUserProfile(res.data))
        })

    }
}

export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(res => {

            dispatch(setStatus(res.data))
        })

    }
}


export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(res => {

            if (Response.data.resultCode === 0) {

                dispatch(setStatus(res.data))
            }

        })

    }
}

export const savePhoto = (file) => {
    return (dispatch) => {
        profileAPI.savePhoto(file).then(res => {

            if (Response.data.resultCode === 0) {

                dispatch(setPhotoSucess(res.data.photos))
            }

        })

    }
}




export default ProfileReducer