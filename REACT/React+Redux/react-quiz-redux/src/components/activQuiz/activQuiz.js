import React from "react";
import classes from './activQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
            <span>
                <strong>{props.answerNamber}</strong>&nbsp;
                {props.question}
            </span>
                <small>{props.answerNamber} из {props.quizLength}</small>
            </p>

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            />
        </div>
    )
}


export default ActiveQuiz
