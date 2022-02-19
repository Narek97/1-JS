import React from 'react';
import './navBar.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/addStudent" activeClassName="active" className='nav'>Add Student</NavLink>
            <NavLink exact to="/home" activeClassName="active" className='nav'>Home</NavLink>
            <NavLink exact to="/addGroup" activeClassName="active" className='nav'>Add Group</NavLink>
        </div>
    )
}

export default NavBar
