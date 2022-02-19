import React from 'react'

export const Input = ({inputs, onChange, className}) => {

    return (
        <div>
            {
                inputs.map((inp, idx) => {
                    return (
                        <div key={idx} className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input
                                type="text"
                                className={className ? 'form-control error' : 'form-control' }
                                placeholder={inp.placeholder}
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                                value={inp.value}
                                onChange={onChange}
                                name={idx}
                                required={true}
                            />

                        </div>
                    )
                })
            }
        </div>


    )
}
