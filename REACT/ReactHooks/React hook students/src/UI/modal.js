import React, {useContext, useEffect} from 'react'
import MyContext from "../context/context";

export const Modal = ({thisGroup}) => {
    const data = useContext(MyContext)

    useEffect(() => {
        if (thisGroup !== null && thisGroup.count === 6) {
           alert('The group is full , maximum 6 students')
        }
    })

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Students</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            <li className="list-group-item active">Students who do not have groups</li>
                            {
                                data.students.map((s, i) => {
                                    return (
                                        <li key={i} className="list-group-item">
                                            {i + 1}. <b>Name - </b>{s.name} <b>Surname- </b>{s.surname}
                                            <br/>
                                            <button
                                                disabled={thisGroup !== null ? thisGroup.count === 6 ? true : false : null}
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => data.addStudentNewGroup(thisGroup, s)}
                                            >
                                                Add student to this group?
                                            </button>
                                        </li>


                                    )
                                })
                            }
                            {
                                data.students.length===0? <li className="list-group-item">No free students</li>:null

                            }
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
