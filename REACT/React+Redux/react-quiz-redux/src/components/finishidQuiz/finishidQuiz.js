import React from 'react'
import classes from './finishidQuiz.css'
import Button from "../UI/button/button";
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'sucsess') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={classes.FinishidQuiz}>
            <ul>
                {
                    props.quiz.map((quiz, index) => {
                        const cls = [
                            'fa',
                            props.results[quiz.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[quiz.id]]
                        ]
                        return (
                            <li key={index}>
                                <strong>{index + 1}</strong>.&nbsp;
                                {quiz.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )
                    })
                }

            </ul>

            <p>правильна {successCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.inRetry} type={'primary'}>Повторить</Button>
                <Link to={'/'}>
                    <Button type={'sucsess'}>перейти в список тестов</Button>
                </Link>

            </div>
        </div>
    )
}

export default FinishedQuiz
