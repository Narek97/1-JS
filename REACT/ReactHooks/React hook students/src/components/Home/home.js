import React, {useContext, useState} from 'react'
import './home.css'
import MyContext from "../../context/context";
import {Modal} from "../../UI/modal";
import {Link} from "react-router-dom";

export const Home = () => {

    const {group} = useContext(MyContext)
    const [thisGroup, setThisGroup] = useState(null)
    return (
        <div className="Home">
            <Modal
                thisGroup={thisGroup}
            />
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Count</th>
                    <th scope="col">Add</th>
                    <th scope="col">See Students</th>
                </tr>
                </thead>
                <tbody>

                {
                    group.map((val, i) =>
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.count}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    disabled={val.count < 6 ? false : true}
                                    onClick={() => setThisGroup(val)}
                                >
                                    Add student
                                </button>
                            </td>
                            <td>
                                <Link
                                    to={{
                                        pathname: `/group/${val.name}`,
                                        propsSearch: val.students
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                    >
                                        Add student
                                    </button>
                                </Link>


                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
