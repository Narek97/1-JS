import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getUserProfile, getStatus, updateStatus,savePhoto } from "../../Redax/ProfileReducer"
import { withRouter } from "react-router-dom"
import { witAouthRedirect } from "../../HOC/witAoutRedirect"
import { compose } from "redux"



class ProfileContainer extends React.Component {

  refreshProfile() {
    let userID = this.props.match.params.userrID
    if (!userID) {
      userID = this.props.userID
      if (!userID) {
        this.props.history.push("/Login")
      }
    }

    this.props.getUserProfile(userID);
    this.props.getStatus(userID)
  }

  componentDidMount = () => {
    this.refreshProfile()
  }

  componentWillUpdate(prevProps, prevStatus) {
    // if(this.props.match.params.userrID1!=prevProps.match.params.userrID){
    //   console.log("ok")
    //   this.refreshProfile()
    // }

  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!!this.props.match.params.userrID}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
        />
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  isLogin: state.login.isAuth,
  status: state.ProfilePage.status,
  userID: state.login.userId,
  isAuth: state.login.isAuth
})
//// High Order Component (hoc)
// let AuthRedirectComponent=witAouthRedirect(ProfileContainer)
//// ........................

// let withRouterComponent = withRouter(AuthRedirectComponent)
// 
// export default connect(mapStateToProps, { getUserProfile })(withRouterComponent) 
// 
//// esqany irar xmbavorelu hamr ogtagortum enq compose funkchian

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  witAouthRedirect
)(ProfileContainer)