// selector

export const getUsers=(state)=>{
    return state.userPage.users
}
export const getPageSize=(state)=>{
    return state.userPage.pageSize
}
export const getTotalUsersCount=(state)=>{
    return state.userPage.totalUsersCount
}
export const getCurrentPage=(state)=>{
    return state.userPage.currentPage
}
export const getIsFutching=(state)=>{
    return state.userPage.isFutching
}
export const getFollowingIsProgress=(state)=>{
    return state.userPage.followingIsProgress
}


