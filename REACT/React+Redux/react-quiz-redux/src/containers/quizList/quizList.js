import React, {Component} from 'react';
import classes from './quizList.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/loader/loader";
import {connect} from "react-redux";
import {fetchQuizes} from "../../reduxStore/actions/quizAction";

class QuizList extends Component {



    componentDidMount() {
        this.props.fetchQuizes()
    }

    renderQuizes() {
        return this.props.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={`/quiz/${quiz.id}`}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    {
                        this.props.loading && this.props.quizes.length !== 0
                            ? <Loader/> :
                            <ul>
                                {
                                    this.renderQuizes()
                                }
                            </ul>
                    }


                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToPro(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToPro)(QuizList);
