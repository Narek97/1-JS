import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import BookstoreService from "./services/bookstore-service";
import {BookeStoreProvider} from "./components/bookstore-context/bookstore-context";
import store from './store'
import {ErrorBoundry} from "./components/error-boundry/error-boundry";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <BookeStoreProvider value={bookstoreService}>
                    <Router>
                        <App/>
                    </Router>
                </BookeStoreProvider>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
