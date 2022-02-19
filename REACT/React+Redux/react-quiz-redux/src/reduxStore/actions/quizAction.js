import axios from "../../axios/axios-quiz";
import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS, FINISH_QUIZ, QUIZ_NEXT_QUESTION, QUIZ_RETRY,
    QUIZ_SET_STATE
} from "./axtionTypes";

//qizList
export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const res = await axios.get('/quizes.json')

            const quizes = []
            Object.keys(res.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест № ${index + 1}`
                })

            })
            dispatch(fetchQuizesEnd(quizes))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesEnd(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}

//....................................................

//quiz
export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const res = await axios.get(`/quizes/${quizId}.json`)
            const quiz = res.data

            dispatch(fetchQuizSuccess(quiz))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function quizAnswerClick(answerId) {

    return (dispatch, getState) => {
        const state = getState().quiz
        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'sucsess') {
                return
            }
        }

        const question = state.quiz[state.activeQuestion]
        const results = state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'sucsess'
            }
            dispatch(quizSetState({[answerId]: 'sucsess'}, results))
            const timeout = window.setTimeout(() => {
                if (isQuizFinish(state)) {
                    dispatch(finishQuiz())
                } else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1))
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error'
            dispatch(quizSetState({[answerId]: 'error'}, results))
        }
    }
}

export function quizSetState(answerState, results) {

    return {
        type: QUIZ_SET_STATE,
        answerState, results
    }
}

function finishQuiz() {
    return {
        type: FINISH_QUIZ,
    }
}

function quizNextQuestion(quistionNumber) {
    return {
        type: QUIZ_NEXT_QUESTION,
        number: quistionNumber
    }
}

function isQuizFinish(state) {
    return state.activeQuestion + 1 === state.quiz.length
}

export function reatryQuiz() {

    return {
        type: QUIZ_RETRY
    }
}



