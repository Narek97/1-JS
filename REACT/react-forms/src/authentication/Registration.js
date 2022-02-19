import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from "../components1/FormikControl";


const Registration = () => {

    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'},
    ]

    const initialValue = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required email').email('Invalid email'),
        password: Yup.string().required('Required password').min(6, 'Min password length 6'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Required confirm password'),
        modeOfContact: Yup.string().required('Required mode of contact'),
        //when ->  ete usery yntrela heraxosi mijochov nor partadir lini nshely heraxosy
        phone: Yup.string().when('modeOfContact',{
            is:'telephonemoc',
            then:Yup.string().required('Required phone number')
        })
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
                        control={'input'}
                        type="email"
                        label="Email"
                        name="email"
                    />
                    <FormikControl
                        control={'input'}
                        type="password"
                        label="Password"
                        name="password"
                    />
                    <FormikControl
                        control={'input'}
                        type="password"
                        label="ConfirmPassword"
                        name="confirmPassword"
                    />
                    <FormikControl
                        control={'radio'}
                        label="Mode of contact"
                        name="modeOfContact"
                        options={options}
                    />
                    <FormikControl
                        control={'input'}
                        type="text"
                        label="Phone number"
                        name="phone"
                    />

                    <button type={'submit'} disabled={!formik.isValid}>Submit</button>
                </Form>
            }
        </Formik>
    );
};

export default Registration;
