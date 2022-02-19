import React, { useState } from 'react'
import { compose } from "redux"
import { connect } from "react-redux"
import { addCars } from '../Redux/CarReducer'
import {useHistory} from "react-router-dom"


function AddCar(props) {


    const [inpVal, setInpVal] = useState({
        name: '',
        age: '',
        color: '',
        price: ''
    })

    const history = useHistory()
    const Add = () =>{
        props.addCars(inpVal)
        history.push(`/Car`)
    }
    return (
        <div className="row">
            <h1 style={{ textAlign: 'center' }}>Add New Car</h1>

            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input value={inpVal.name} onChange={e => setInpVal({ ...inpVal, name: e.target.value })} className="input_text" type="text" data-length="10" />
                        <label htmlFor="input_text">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={inpVal.age} onChange={e => setInpVal({ ...inpVal, age: e.target.value })} className="input_text" type="text" data-length="10" />
                        <label htmlFor="input_text">Age</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={inpVal.color} onChange={e => setInpVal({ ...inpVal, color: e.target.value })} className="input_text" type="text" data-length="10" />
                        <label htmlFor="input_text">Color</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={inpVal.price} onChange={e => setInpVal({ ...inpVal, price: e.target.value })} className="input_text" type="text" data-length="10" />
                        <label htmlFor="input_text">Price</label>
                    </div>

                </div>

            </form>
            <div style={{ textAlign: 'center' }} >
                <button onClick={Add}>Add</button>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    car: state.Car.cars
})

export default compose(connect(mapStateToProps, { addCars }))(AddCar)

