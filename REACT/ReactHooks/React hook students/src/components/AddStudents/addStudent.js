import React, {useContext, useState} from 'react';
import './addStudent.css'
import {Select} from "../../UI/select";
import {Input} from "../../UI/Input";
import MyContext from "../../context/context";

const AddStudents = () => {

    const data = useContext(MyContext)

    const [group, setGroup] = useState({

        selectValue: 'disabled'
    })

    const [inputs, setInputs] = useState([
        {
            placeholder: 'Name',
            value: '',
        },
        {
            placeholder: 'Surname',
            value: '',
        }
    ])

    const changeUsers = (e) => {
        let {name, value} = e.target
        let newArray = [...inputs]
        newArray[name].value = value
        setInputs(newArray)
    }

    const submit = (e) => {
        e.preventDefault();
        data.addNewStudentInGroup(inputs, group)
        setInputs([
            {
                placeholder: 'Name',
                value: '',
            },
            {
                placeholder: 'Surname',
                value: '',
            }
        ])
        setGroup({
            selectValue: 'disabled'
        })
    }

    const selectChangeHandler = (e) => {
        setGroup({selectValue: e.target.value})
    }


    return (
        <div className="AddStudents">
            <h1>Add Students</h1>
            <form onSubmit={submit}>

                <Input
                    inputs={inputs}
                    onChange={changeUsers}
                />
                <Select
                    value={group.selectValue}
                    onChange={selectChangeHandler}
                />
                <div className="input-group mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddStudents
