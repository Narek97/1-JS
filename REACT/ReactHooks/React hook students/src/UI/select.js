import React, {useContext} from 'react'
import MyContext from "../context/context";

export const Select = ({value, onChange}) => {

    let {group} = useContext(MyContext)
    let count = 0
    return (
        <div className="input-group mb-3">
            <select
                value={value}
                className="custom-select"
                id="inputGroupSelect01"
                onChange={onChange}
            >
                <option value={'disabled'} disabled={true}>Choose a group ...</option>
                {
                    group.map((option, index) => {

                        if (option.count < 6) {
                            count++
                            return (
                                <option
                                    key={index}
                                    value={option.name}
                                >
                                    {option.name}
                                </option>
                            )
                        }
                        else{
                            return null
                        }

                    })
                }
                {
                    count === 0 ? <option style={{color:'red'}} disabled> no free groups, please create a new group</option> : ''

                }
            </select>
        </div>
    )
}
