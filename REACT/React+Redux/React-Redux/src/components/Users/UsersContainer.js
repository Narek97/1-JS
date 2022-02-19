

import React from "react"
import { connect } from "react-redux"
import { followSuccess, unfollowSuccess,ToggleFollowingIsProgress,getUsersThunkCreator,follaw,unFollaw } from "../../Redax/UsersReducer"
import Users from "./Users"
import Preloader from "../Compon/Preloader"
import { compose } from "redux"
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFutching, getFollowingIsProgress } from "../../Redax/usersSelectori"


class UsersContainer extends React.Component {

    
    componentDidMount = () => {
        
        // bazayi het hardumneri kody grum enq reduxStorum u funkchiayi tesqov kanchum
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
        
    }
    
    onPageChanged = (pageNumber) => {
        
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
        
    }
    
    render() {
        return (
            
            <div>
                {this.props.isFutching?<Preloader/>:null}
                <Users 
                    props={this.props} 
                    onPageChanged={this.onPageChanged} 
                    ToggleFollowingIsProgress={this.props.ToggleFollowingIsProgress}
                    followingIsProgress={this.props.followingIsProgress}
                    follaw={this.props.follaw}
                    unFollaw={this.props.unFollaw}
                />
             </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {

        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFutching:getIsFutching(state),
        followingIsProgress:getFollowingIsProgress(state),
    }

}


// export default connect
//     (mapStateToProps,
//     {followSuccess,
//     unfollowSuccess, 
//     ToggleFollowingIsProgress,
//     getUsersThunkCreator,
//     follaw,
//     unFollaw
//     } )
//     (UsersContainer) 


//// esqany irar xmbavorelu hamr ogtagortum enq compose funkchian
export default  compose(
    connect
    (mapStateToProps,
    {followSuccess,
    unfollowSuccess, 
    ToggleFollowingIsProgress,
    getUsersThunkCreator,
    follaw,
    unFollaw
    } )

)(UsersContainer)