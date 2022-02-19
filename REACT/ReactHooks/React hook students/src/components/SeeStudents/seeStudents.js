import React from 'react'
import {useHistory} from "react-router-dom";

export const SeeStudents = ({location}) => {
    let history = useHistory();

    return (
        <ul className="list-group" style={{textAlign:'center'}}>
            <li className="list-group-item active">Students group</li>
            {
                location.propsSearch ? location.propsSearch.map((s, i) =>
                    <li key={i} className="list-group-item">{i + 1}. <b>Name - </b>{s.name} <b>Surname- </b>{s.surname}
                    </li>
                ) :  history.push("/home")
            }
        </ul>
    )
}
