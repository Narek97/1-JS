import React from 'react';
import { render } from 'react-dom';
//createStore bolor statery u actionnery ogtagortelu hamar
// applyMiddleware redux-thunk het ashxatelu hamar vor server hardum uxarkenq
// tarber funkcianer xmbavorelu hamr ogtagortum enq compose funkchian
import  {createStore, compose, applyMiddleware}  from 'redux';
// reduxy reacti bolor componentnerin miachnelu hmar
import { Provider } from "react-redux";
// asinxron hardumner uxarkelu hamar,// u vorpeszi serveri het kapy reduserum grenq
import thunk from 'redux-thunk'
import App from './App';
import * as serviceWorker from './serviceWorker';
// bolor reducernery miavorat
import { rootReducer } from './redux/rootReducer';
// arandin mer uzat midalvear stextelu hamar
import { forbidderWordsMiddleware } from './redux/middleware';

const store = createStore(rootReducer,compose(
    applyMiddleware(
        thunk,
        forbidderWordsMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (

    <Provider store={store}>
        <App/>,
    </Provider>
)

render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
