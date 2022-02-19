import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">

                    <ul className="tabs tabs-transparent">
                        <li className="tab"><NavLink to="/Car" >Car</NavLink> </li>     
                        <li className="tab"><NavLink to="/AddCar" >Add car</NavLink> </li>

                    </ul>

                </div>

            </nav>

        </div>
    )
}

export default NavBar
