import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from "./FormikControl";


const FormikContainer = () => {

    const dropdownOptions = [
        {key: 'Select an option', value: ''},
        {key: 'Option 1', value: 'Option1'},
        {key: 'Option 2', value: 'Option2'},
        {key: 'Option 3', value: 'Option3'},
    ]

    const radioOptions = [
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'},
        {key: 'Option 3', value: 'rOption3'},
    ]

    const checkBoxOption = [
        {key: 'Option 1', value: 'checkOption1'},
        {key: 'Option 2', value: 'checkOption2'},
        {key: 'Option 3', value: 'checkOption3'},
    ]

    const initialValue = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null,

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required email').email('Invalid email'),
        description: Yup.string().required('Required email'),
        selectOption: Yup.string().required('Required select'),
        radioOption: Yup.string().required('Required radio'),
        checkboxOption: Yup.array().required('Required checkbox'),
        birthDate: Yup.date().required('Required date').nullable(),

    })
    const onSubmit = value => {
        console.log('Form data', value)
        console.log('Saved data', JSON.parse(JSON.stringify(value)))
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
                        control={'textarea'}
                        label="Description"
                        name="description"
                    />
                    <FormikControl
                        control={'select'}
                        label={'Select a topic'}
                        name="selectOption"
                        options={dropdownOptions}
                    />
                    <FormikControl
                        control={'radio'}
                        label={'Radio Topic'}
                        name="radioOption"
                        options={radioOptions}
                    />
                    <FormikControl
                        control={'checkbox'}
                        label={'checkbox Topic'}
                        name="checkboxOption"
                        options={checkBoxOption}
                    />
                    <FormikControl
                        control={'date'}
                        label={'Pick a date'}
                        name="birthDate"
                    />

                    <button type={'submit'}>Submit</button>
                </Form>
            }
        </Formik>
    );
};

export default FormikContainer;
