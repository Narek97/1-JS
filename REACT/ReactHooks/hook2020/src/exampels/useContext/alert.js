import React from 'react';
import {useAlert} from "./AlertContext";

function Alert() {

    const {alert} = useAlert()


    if (!alert) {
        return null
    }
    return (
        <div className="alert alert-danger">
            <h1>Alert js</h1>
        </div>
    );
}

export default Alert;
