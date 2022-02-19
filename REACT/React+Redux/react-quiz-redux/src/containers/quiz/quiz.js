import React from 'react'
import classes from './quiz.css'
import ActiveQuiz from "../../components/activQuiz/activQuiz";
import FinishedQuiz from "../../components/finishidQuiz/finishidQuiz";
import Loader from "../../components/UI/loader/loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, reatryQuiz} from "../../reduxStore/actions/quizAction";

class Quiz extends React.Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.reatryQuiz()
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы</h1>
                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader/>
                            : this.props.isFinished
                            ? <FinishedQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                inRetry={this.props.reatryQuiz}
                            />
                            : <ActiveQuiz
                                answers={this.props.quiz[this.props.activeQuestion].answer}
                                question={this.props.quiz[this.props.activeQuestion].question}
                                onAnswerClick={this.props.quizAnswerClick}
                                quizLength={this.props.quiz.length}
                                answerNamber={this.props.activeQuestion + 1}
                                state={this.props.answerState}
                            />
                    }

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answeId => dispatch(quizAnswerClick(answeId)),
        reatryQuiz: () => dispatch(reatryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
