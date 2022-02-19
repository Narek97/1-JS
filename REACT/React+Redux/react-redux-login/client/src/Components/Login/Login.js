import React, { useState } from 'react'
import s from "./Login.module.css"
import {
    NavLink
} from "react-router-dom";
import { connect } from "react-redux"
import { login } from '../../ReduxStore/LoginReducer'

function Login(props) {

    const [loginForm, setLoginForm] = useState({ email: '', password: '' })

    return (
        <div className={s.container}>
            <div className="container">
                <h1>Sign In</h1>
                <div className="row">
                    <form className="col s12" onSubmit={e=>e.preventDefault()}>

                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    required
                                    id="email"
                                    type="email"
                                    className="validate"
                                    value={loginForm.email}
                                    onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="Email The address you provided does not match any account." data-success="right"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    required
                                    id="password"
                                    type="password"
                                    className="validate"
                                    minLength="6"
                                    value={loginForm.password}
                                    onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}

                                />
                                <label htmlFor="password">Password</label>
                                <span className="helper-text" data-error="Password must be at least 6 characters long" data-success="right">    </span>
                            </div>
                            <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Remember Me</span>
                                </label>
                            </p>

                        </div>
                        <h4>Don't have an account? <NavLink to="/Signup">Sign up</NavLink> </h4>
                        <input onClick={() => props.login(loginForm)} className={s.inpSubmit} type="submit" value='Login' />
                    
                    </form>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        data: state.Login
    }
}

export default connect(mapStateToProps, { login })(Login)


