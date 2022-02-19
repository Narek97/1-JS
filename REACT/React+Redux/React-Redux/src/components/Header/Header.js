import React from "react"
import s from  "./Header.module.css"
import {NavLink} from "react-router-dom"

const Header =(props)=>{
    return(
        <header className={s.header}>
          <img  src="https://dynamic.brandcrowd.com/asset/logo/62fdfa68-3a48-46da-9959-be64842d7c47/logo?v=4" alt=""/>

          <div className={s.loginBlock}>
            {props.isAuth?<div>{props.login} <button onClick={props.logout}>Logout</button> </div> :<NavLink to="/login">Login</NavLink>}
              
          </div>
       
       
       
        </header>
    )
}

export default Header