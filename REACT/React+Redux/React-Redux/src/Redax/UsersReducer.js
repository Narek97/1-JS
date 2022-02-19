import { getUsers, followUsers, UnfollowUsers } from "../Api/Api"

let defaultState = {

    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFutching: true,
    followingIsProgress: []

}


const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "follaw":
            
            return {
                ...state,
                // ete obekti mej petqe poxel menak mek dasht ...state karanq chgrenq
                // u dra texy grenq map
                users: state.users.map((data) => {
                    if (data.id === action.userID) {

                        return {
                            ...data, followed: true
                        }
                    }
                    return data
                })
            }


        case "unfollow":

            return {
                ...state,
                // ete obekti mej petqe poxel menak mek dasht ...state karanq chgrenq
                // u dra texy grenq map
                users: state.users.map((data) => {

                    if (data.id === action.userID) {

                        return {
                            ...data, followed: false
                        }
                    }
                    return data
                })
            }
        case "set-uers":
            return {
                ...state, users: [...action.users]
            }
        case "set-Current-Page":

            return {
                ...state, currentPage: action.page
            }
        case "set-Total-Users-Count":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "Toggle-Is-Fetching":
            return {
                ...state, isFutching: action.isFutching
            }
        case "following-Is-Progress":
            return {
                ...state,
                followingIsProgress: action.isFutching ?
                    [...state.followingIsProgress, action.userID] :
                    state.followingIsProgress.filter(id => id !== action.userID)

            }


        default: {
            return state
        }
    }


}

export const followSuccess = (userID) => ({ type: "follaw", userID })
export const unfollowSuccess = (userID) => ({ type: "unfollow", userID })
export const setUsers = (users) => ({ type: "set-uers", users })
export const setCurrentPage = (page) => ({ type: "set-Current-Page", page })
export const setTotalUsersCount = (totalCount) => ({ type: "set-Total-Users-Count", totalCount })
export const ToggleIsFetching = (isFutching) => ({ type: "Toggle-Is-Fetching", isFutching })
export const ToggleFollowingIsProgress = (isFutching, userID) => ({ type: "following-Is-Progress", isFutching, userID })

//  redux-thunk
export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(ToggleIsFetching(true))
        getUsers(currentPage, pageSize).then(res => {
            dispatch(ToggleIsFetching(false))
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
            dispatch(setCurrentPage(currentPage))

        })
    }
}
export const follaw = (DataID) => {

    return (dispatch) => {
        dispatch(ToggleFollowingIsProgress(true, DataID))
        followUsers(DataID).then(res => {
            console.log(res)
            if (res.data.resultCode === 0) {
                dispatch(followSuccess(DataID))
            }
            dispatch(ToggleFollowingIsProgress(false, DataID))
        })
    }
}

export const unFollaw = (DataID) => {

    return (dispatch) => {
        dispatch(ToggleFollowingIsProgress(true, DataID))
        UnfollowUsers(DataID).then(res => {
            console.log(res)
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccess(DataID))
            }
            dispatch(ToggleFollowingIsProgress(false, DataID))

        })
    }
}



export default UserReducer 