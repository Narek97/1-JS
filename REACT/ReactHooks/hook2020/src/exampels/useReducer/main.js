import React from 'react';
import {useAlert} from "./AlertContext";

function Main() {

    const {show} = useAlert()

    return (
        <div>
            <h1>Main js</h1>
            <button onClick={()=>show('Main.js')} className="btn btn-primary">Pokazat alert</button>
        </div>
    );
}

export default Main;
