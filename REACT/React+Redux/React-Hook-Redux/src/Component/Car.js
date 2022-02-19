import React, { useEffect } from 'react'
import { compose } from "redux"
import { connect } from "react-redux"
import { addCars, removeCars } from '../Redux/CarReducer'

function Car(props) {

    useEffect(() => {
        // props.addCars(JSON.parse(sessionStorage.getItem('Car')))
        sessionStorage.setItem('Car', JSON.stringify(props.car));

    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>CAR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Delet</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.car.map((Cars) =>
                            <tr key={Cars.id}>
                                <td>{Cars.name}</td>
                                <td>{Cars.age}</td>
                                <td>{Cars.color}</td>
                                <td>{Cars.price}$</td>
                                <td> <button onClick={() => props.removeCars(Cars.id)}>Delet</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    )
}

let mapStateToProps = (state) => ({
    car: state.Car.cars
})

export default compose(connect(mapStateToProps, { addCars, removeCars }))(Car)


