import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

const Navbar =()=>{
    return(
      <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink> 
      </div>
      <div className={s.item}>
        <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink> 
      </div>
      <div className={s.item}>
        <NavLink to="/Users" activeClassName={s.activeLink}>Users</NavLink> 
      </div>
      <div className={s.item}>
       <NavLink to="">News</NavLink> 
      </div>
      <div className={s.item}>
       <NavLink to="">Music</NavLink> 
      </div>
      <div className={s.item}>
       <NavLink to="">Setings</NavLink> 
      </div>
    </nav>
    )
}

export default Navbar