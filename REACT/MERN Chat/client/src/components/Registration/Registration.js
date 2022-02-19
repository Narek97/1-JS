import React, { useState } from 'react'
import {useHttp} from '../../cutomHooks/httpHooks'
import { useHistory } from "react-router-dom";

function Registration() {

    const [form, setForm] = useState({ email: '', password: '' })

    const {request} = useHttp()
    const Registration =async ()=>{
        await request('/api/auth/registr', "POST", { ...form })

    }
    const history = useHistory();
    const Login =async ()=>{
        const data = await request('/api/auth/login', "POST", { ...form })
        if(data){
            sessionStorage.setItem('token', data.token);
            console.log(data)
            history.push("/home",data.userId);
        }
    }

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        type="email"
                        className="validate"
                        value={form.email}
                        onChange={e=>setForm({...form,email:e.target.value})}

                    />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        type="password"
                        className="validate"
                        value={form.password}
                        onChange={e=>setForm({...form,password:e.target.value})}
                    />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>

                <button onClick={Registration} className="waves-effect waves-light btn">Registration</button>
                <button onClick={Login} style={{ marginLeft: '20px' }} className="waves-effect waves-light btn">Login</button>

            </div>

        </div>
    )
}

export default Registration
