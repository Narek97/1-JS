import React, {useContext} from 'react';
import './addGroup.css'
import {Input} from "../../UI/Input";
import MyContext from "../../context/context";


const AddGroup = () => {

    const data = useContext(MyContext)
    return (
        <div className="AddGroup">
            <h1>Add Group</h1>
            <Input
                className={!!data.newGroup[0].error}
                inputs={data.newGroup}
                onChange={data.changeUsers}
            />
            {
                !!data.newGroup[0].error ?
                    <div className="alert alert-danger input-group mb-3" role="alert">
                        {data.newGroup[0].error}
                    </div> : ''
            }

            <div className="input-group mb-3">
                <button onClick={() => data.addGroup(data.newGroup)} className="btn btn-primary">Save</button>
            </div>

        </div>
    )
}

export default AddGroup
