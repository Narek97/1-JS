import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from "../components1/FormikControl";



const Login = () => {


    const initialValue = {
        email: '',
        password: '',


    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required email').email('Invalid email'),
        password: Yup.string().required('Required password').min(6,'Min password length 6')
    })
    const onSubmit = value => {
        console.log('Form data', value)
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FormikControl
                        control={'chakraInput'}
                        type="email"
                        label="Email"
                        name="email"
                    />
                    <FormikControl
                        control={'chakraInput'}
                        type="password"
                        label="Password"
                        name="password"
                    />

                    <button type={'submit'} disabled={!formik.isValid}>Submit</button>
                </Form>
            }
        </Formik>
    );
};

export default Login;
