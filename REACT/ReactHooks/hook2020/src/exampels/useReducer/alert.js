import React from 'react';
import {useAlert} from "./AlertContext";

function Alert() {

    const {visible,hide,text} = useAlert()

    if (!visible) {
        return null
    }
    return (
        <div className="alert alert-danger" onClick={hide}>
            <h1>Alert js</h1>
            {text}
        </div>
    );
}

export default Alert;
