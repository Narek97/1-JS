import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from "../components1/FormikControl";


const EnrollmentForm = () => {

    const dropdownOption = [
        {key: 'Select your course', value: ''},
        {key: 'React', value: 'react'},
        {key: 'Angular', value: 'angular'},
        {key: 'Vue', value: 'vue'},
    ]

    const checkboxOption = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value: 'css'},
        {key: 'JavaScript', value: 'js'},
    ]

    const initialValue = {
        email: '',
        bio: '',
        courses: '',
        skills: [],
        courseDate: null,
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required email').email('Invalid email'),
        bio: Yup.string().required('Required bio'),
        courses: Yup.string().required('Required courses'),
        courseDate: Yup.date().required('Required courses').nullable(),

    })

    const onSubmit = (value) => {
        console.log('Form data', value)
    }


    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {
                formik=>{
                    return <Form>
                        <FormikControl
                            control={'input'}
                            type="email"
                            label="Email"
                            name="email"
                        />
                        <FormikControl
                            control={'textarea'}
                            label="Bio"
                            name="bio"
                        />
                        <FormikControl
                            control={'select'}
                            label="Course"
                            name="courses"
                            options={dropdownOption}
                        />
                        <FormikControl
                            control={'checkbox'}
                            label="Your skillsSet"
                            name="skills"
                            options={checkboxOption}
                        />
                        <FormikControl
                            control={'date'}
                            label="Course Date"
                            name="courseDate"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                }
            }

        </Formik>
    );
};

export default EnrollmentForm;
