import React from "react"
import { Field, reduxForm } from 'redux-form'
import { Input } from "../Compon/FormsControl/FormsControl"
import { required, emailCreator } from "../../utils/Validator/validator"
import { connect } from "react-redux"
import { login } from "../../Redax/LoginReducer "
import { Redirect } from "react-router-dom"

// redux-form
const LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
                <Field
                    placeholder="Email"
                    name="email" type="text"
                    component={Input}
                    validate={[required, emailCreator]}

                />
            </div>
            <div>
                <Field
                    placeholder="Password"
                    name="password"
                    type="password"
                    component={Input}
                    validate={[required]}

                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input} /> remember me
            </div>
            <div style={{color:"red"}}>
  
                {/*stopSubmit */}
                {/* erb sxal email kam password gres errory chych ta */}
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'email'
})(LoginForm)

const Login = (props) => {

    // stex LoginForm-um grat tvyalnery beruma login sexmeluch heto
    const onSubmit = (data) => {
        props.login(data.email, data.password)
    }

    if (props.isAuth) {
        return <Redirect to="/Profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth
})

export default connect(mapStateToProps, { login })(Login) 