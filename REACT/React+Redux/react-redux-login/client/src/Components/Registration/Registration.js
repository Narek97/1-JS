import React, { useState } from 'react'
import {
    NavLink
} from "react-router-dom";
import { connect } from "react-redux"
import s from './Registration.module.css'
import {getAuthUserData} from '../../ReduxStore/RegReducer'


function Registration(props) {

    const [regForm, setRegForm] = useState({ name: '', surname: '', email: '', password: '' })

    const Signin = (e) =>{
        
        e.preventDefault()
    }
    console.log(props)

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <div className="row">
                <form className="col s12" onSubmit={Signin}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                required
                                minLength="2"
                                id="first_name"
                                type="text"
                                className="validate"
                                value={regForm.name}
                                onChange={e => setRegForm({ ...regForm, name: e.target.value })}
                            />
                            <label htmlFor="first_name">First Name</label>
                            <span className="helper-text" data-error="First name must be at least 2 characters long" data-success="right">    </span>

                        </div>
                        <div className="input-field col s6">
                            <input
                                required
                                minLength="2"
                                id="last_name"
                                type="text"
                                className="validate"
                                value={regForm.surname}
                                onChange={e => setRegForm({ ...regForm, surname: e.target.value })}
                            />
                            <label htmlFor="last_name">Last Name</label>
                            <span className="helper-text" data-error="Last name must be at least 2 characters long" data-success="right">    </span>

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                required
                                id="email"
                                type="email"
                                className="validate"
                                value={regForm.email} 
                                onChange={e=>setRegForm({...regForm,email:e.target.value})}
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
                                value={regForm.password} 
                                onChange={e=>setRegForm({...regForm,password:e.target.value})}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="helper-text" data-error="Password must be at least 6 characters long" data-success="right">    </span>
                        </div>
                    </div>
                    <h4><NavLink to="/Login">Sign in</NavLink> </h4>

     
                    <input onClick={()=>props.getAuthUserData(regForm)}  type="submit" className={s.inpSubmit} style={{ float: 'right' }} value='Registration' />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.Reg
    }
}

export default connect(mapStateToProps, {getAuthUserData})(Registration) 
