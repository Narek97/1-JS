import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import {logout} from "../../Redax/LoginReducer "


class HeaderContainer extends React.Component {

    render() {
        return (

            <Header {...this.props} />

        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        login: state.login.login
    }

}

export default connect(mapStateToProps, {logout })(HeaderContainer) 