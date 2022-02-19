
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logouth} from "../../reduxStore/actions/authAction";

class Logouth extends Component {

  componentDidMount() {
      this.props.logouth();
  }
  render() {
      return <Redirect to={'/'}/>
  }
}

function mapDispatchToProps(dispatch){
    return{
        logouth:()=>dispatch(logouth())
    }
}

export default connect(null,mapDispatchToProps)(Logouth) ;
