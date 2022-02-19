import React from 'react';
import Layout from "./HOC/Layout/layout";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Quiz from "./containers/quiz/quiz";
import QuizList from "./containers/quizList/quizList";
import Auth from "./containers/auth/auth";
import QuizCreator from "./containers/quizCreator/quizCreator";
import logout from "./components/logouth/logouth";
import {autoLogin} from "./reduxStore/actions/authAction";
import {connect} from "react-redux";


class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" exact component={QuizList}/>
                <Redirect to="/"/>
            </Switch>
        )
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/logout" component={logout}/>
                    <Route path="/" exact component={QuizList}/>
                    <Redirect to="/"/>
                </Switch>
            )
        }
        return (
            <Layout>
                {routes}
            </Layout>
        );
    }


}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
