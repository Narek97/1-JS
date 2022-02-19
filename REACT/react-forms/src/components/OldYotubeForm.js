import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'

//Yup formikov validacia anelu hamar

const OldYoutubeForm = () => {

    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }
    const onSubmit = values => {
        console.log('form data', values)
    }

    //derov validaci anelu hamar
    const validate = values => {
        let errors = {}
        if (!values.name) {
            errors.name = 'Name is required'
        }
        if (!values.email) {
            errors.email = 'Email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.channel) {
            errors.channel = 'Channel is required'
        }
        return errors
    }

    //Yup ov validacia anelu hamar
    const validationSchema = Yup.object({
        name: Yup.string().required('Required name'),
        email: Yup.string().email('Invalid email format').required('Required email'),
        channel: Yup.string().required('Required channel')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    })

    //inputi valuen esnelu hamar
    // console.log('form value',formik.values);
    //inputi error dashtery tesnelu hamar
    // console.log('form errors', formik.errors);
    //imanal ardyoq usery tvyal inputin kpela te che vor errory cuych ta ete ka
    // console.log('Visited fields', formik.touched);


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <div className={'form-control'}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name={'name'}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : ''}
                </div>

                <div className={'form-control'}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name={'email'}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.email}
                           {/*onChange,onBlur,value poxaren grum enq sench*/}
                        // {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ?
                        <div className="error">{formik.errors.email}</div> : ''}
                </div>

                <div className={'form-control'}>
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name={'channel'}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.channel}
                    />
                    {formik.errors.channel && formik.touched.channel ?
                        <div className="error">{formik.errors.channel}</div> : ''}
                </div>

                <button type={"submit"}>
                    Submit
                </button>

            </form>
        </div>
    );
};

export default OldYoutubeForm;
