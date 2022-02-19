import React from 'react';
import {useAlert} from "./useReducer/AlertContext";
// import {useAlertToggle} from "./useContext/AlertContext";

function Main({toggleAlert}) {

    // const toggle = useAlertToggle()
    const {toggle} = useAlert()



    return (
        <div>
            <h1>Main js</h1>
            <button onClick={toggle} className="btn btn-primary">Pokazat alert</button>
        </div>
    );
}

export default Main;
