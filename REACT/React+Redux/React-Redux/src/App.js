import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializApp } from './Redax/AppReducer';
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import Preloader from './components/Compon/Preloader';


class App extends React.Component {

  componentDidMount = () => {
    this.props.initializApp()
  }

  render() {
    if (!this.props.initializ) {

      return <Preloader />

    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Dialogs" render={() =>
            <DialogsContainer
            // store={props.store}
            />

          } />
          {/* ? nshanakuma vor userId partadir chi vor lini */}
          <Route path="/Profile/:userrID?" render={() =>
            <ProfileContainer
            // store={props.store}
            />
          } />
          <Route path="/Users" render={() =>
            <UsersContainer />
          } />
          <Route path="/Login" render={() =>
            <Login />
          } />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  initializ: state.app.initialized
})

export default compose(

  withRouter,
  connect(mapStateToProps, { initializApp }))
  (App)


