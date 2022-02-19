import React, {useState} from 'react';

export default (props) => {

    const [value,setValue] = useState('')
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        id="button-addon1"
                        onClick={()=>props.onSarch(value)}
                    >
                        Search</button>
                </div>
                <input
                    type="text"
                    className="form-control"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
            </div>

        </div>
)
}