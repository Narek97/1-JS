import './styles.css'
// import { createStore } from './createStore'
// createStore funkcian chgrelu hamar ka patrasti funkcia redux um
import { createStore, applyMiddleware } from 'redux';
// asinxron kodi het ashxatelu hamar
import thunk from 'redux-thunk';
// middleware
import logger from 'redux-logger'

import {
    rootReducer
} from './redux/rootReducer'

import { increment, decrement, asyncIncrement, changeTheme } from './redux/action'



const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')



const store = createStore(
    rootReducer, 
    applyMiddleware(thunk,logger)
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theame.value
})

store.dispatch({
    type: 'INIT_APPLICATION'
})
themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('Light')
    ?'dark'
    :'Light'
    store.dispatch(changeTheme(newTheme))

})