import React from 'react';
import Main from "./main";
import Alert from "./useContext/alert";
import {AlertProvider} from "./useContext/AlertContext";


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
