import React from 'react';

import Alert from "./useReducer/alert";
import {AlertProvider} from "./useReducer/AlertContext";
import Main from "./useReducer/main";


function App() {


    return (
        <AlertProvider>
            <div className={'container pt 3'}>
                <Alert/>
                <Main toggleAlert={() => {
                }}/>
            </div>
        </AlertProvider>
    );
}

export default App;
