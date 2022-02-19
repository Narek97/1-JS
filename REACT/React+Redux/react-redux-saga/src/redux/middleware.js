import { CREATE_POST } from "./types"
import {showAlert } from "./action"

const forbidden = ['fuck',"span","php"]

export function forbidderWordsMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type === CREATE_POST){
                const found = forbidden.filter(w=>action.payload.title.includes(w))
                if(found.length){
                    return dispatch(showAlert('takie slova nelzya ispolzavat'))
                }
            }
            return next(action)
        }
    }
}