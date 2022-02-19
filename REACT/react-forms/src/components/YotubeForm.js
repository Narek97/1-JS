import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik";
import * as Yup from 'yup'
import TextError from "./TextError";

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    // obekti tescov tvayal stanalu hamar
    social: {
        facebook: '',
        twitter: '',
    },
    // zangvati tescov tvayal stanalu hamar
    phoneNumbers: ['', ''],
    phNumbers: ['']

}

//buttonin sexmelov tvyalnery avtomat avelana
const savedValues  = {
    name: 'Max',
    email: 'm@gmail.com',
    channel: 'code',
    comments: 'welcome to formik',
    address: '221b Baker Street',
    // obekti tescov tvayal stanalu hamar
    social: {
        facebook: '',
        twitter: '',
    },
    // zangvati tescov tvayal stanalu hamar
    phoneNumbers: ['', ''],
    phNumbers: ['']

}

const onSubmit = (values,onSubmitProps)  => {
    console.log('form data', values)
    //subbmit sexmeluch heto formy datarkvi
    onSubmitProps.resetForm()
}

//Yup ov validacia anelu hamar
const validationSchema = Yup.object({
    name: Yup.string().required('Required name'),
    email: Yup.string().email('Invalid email format').required('Required email'),
    channel: Yup.string().required('Required channel'),
    comments: Yup.string().required('Required comments'),

})

const validateComments = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}


const YoutubeForm = () => {
    const [formValues,setFormValues] = useState(null)
    return (

        <Formik
            initialValues={formValues || initialValues }
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            // validateOnChange={false}
            // validateOnBlur={false} ////vor menak submitin sexmeluch heto err cuych ta
        >
            {
                formik => {
                    console.log('formik props', formik)
                    return (
                        <Form>
                            <div className={'form-control'}>
                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name={'name'}/>
                                {/*<ErrorMessage name={'name'} component='div' className={'error'} />*/}
                                {/*kam sench arandin component sarqenq u veragrenq*/}
                                <ErrorMessage name={'name'} component={TextError}/>
                            </div>

                            <div className={'form-control'}>
                                <label htmlFor="email">E-mail</label>
                                <Field type="email" id="email" name={'email'}/>
                                <ErrorMessage name={'email'} component={TextError}/>
                            </div>

                            <div className={'form-control'}>
                                <label htmlFor="channel">Channel</label>
                                <Field type="text" id="channel" name={'channel'}/>
                                <ErrorMessage name={'channel'} component={TextError}/>
                            </div>

                            <div className={'form-control'}>
                                <label htmlFor="comments">Comments</label>
                                <Field as={'textarea'} id="comments" name="comments" validate={validateComments}/>
                                <ErrorMessage name={'comments'} component={TextError}/>
                            </div>

                            <div className={'form-control'}>
                                <label htmlFor="address">Address</label>
                                {/*ete field grenq amen urish fieldi mej text grelu jamanak esela render linum*/}
                                <FastField name="address">
                                    {
                                        (props) => {
                                            console.log('Field render')
                                            const {field, form, meta} = props
                                            return (
                                                <div>
                                                    <input type={'text'} id="address" {...field}/>
                                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                            </div>
                            <div className="form-control">
                                <label htmlFor="facebook">Facebook profile</label>
                                <Field type="text" id={'facebook'} name={'social.facebook'}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="twitter">Facebook profile</label>
                                <Field type="text" id={'twitter'} name={'social.twitter'}/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="primaryPh">Primary phone number</label>
                                <Field type="text" id={'primaryPh'} name={'phoneNumbers[0]'}/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="secondaryPh">Secondary phone number</label>
                                <Field type="text" id={'secondaryPh'} name={'phoneNumbers[1]'}/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="secondaryPh">List of phone number</label>
                                {/*dinamik kerpov zangvati dashter avelachnelu hamar*/}
                                <FieldArray name={'phNumbers'}>
                                    {
                                        (fieldArrayProps) => {
                                            // console.log('fieldArrayProps', fieldArrayProps)
                                            const {push, remove, form} = fieldArrayProps
                                            const {values} = form
                                            const {phNumbers} = values
                                            console.log('form errors', form.errors)
                                            return (
                                                <div>
                                                    {
                                                        phNumbers.map((phNumbers, index) => (
                                                            <div key={index}>
                                                                <Field name={`phNumbers[${index}]`}/>
                                                                {/*avelachrat dashty jnjelu hamar, stugel ete mek hat dashta jnjel chlini*/}
                                                                {
                                                                    index > 0 &&
                                                                    <button type="button"
                                                                            onClick={() => remove(index)}>-</button>

                                                                }
                                                                {/*<button type="button" onClick={() => push('')}>+</button>*/}
                                                            </div>
                                                        ))
                                                    }
                                                    {/*dashter avelachnelu hamar*/}
                                                    <button type="button" onClick={() => push('')}>+</button>

                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>

                            {/*<button type={"button"} onClick={() => formik.validateField('comments')}>Validate comments*/}
                            {/*</button>*/}
                            {/*<button type={"button"} onClick={() => formik.validateForm()}>Validate all</button>*/}

                            {/*<button type={"button"} onClick={() => formik.setFieldTouched('comments')}>Visit comments*/}
                            {/*</button>*/}
                            {/*<button type={"button"} onClick={() => formik.setTouched({*/}
                            {/*    name:true,*/}
                            {/*    email:true,*/}
                            {/*    channel:true,*/}
                            {/*    comments:true*/}
                            {/*})}>Visit all</button>*/}


                            {/*patrasti tvyalnery avtomat dnelu hamar*/}
                            <button type="button" onClick={() => setFormValues(savedValues)} >Load save data</button>
                            {/*grat tvyalnery miangamic jnjelu hamar*/}
                            <button type={'reset'}>Reset</button>
                            {/*disabled ete error ka submit kopkan pakvi*/}
                            <button type={"submit"} disabled={!formik.isValid}>Submit</button>

                        </Form>

                    )
                }
            }
        </Formik>
    );
};
export default YoutubeForm;

