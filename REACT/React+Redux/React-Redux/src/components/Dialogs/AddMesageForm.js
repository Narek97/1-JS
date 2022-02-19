// redux-form
import React from "react"
import { Field, reduxForm } from 'redux-form'
import { Textarea } from "../Compon/FormsControl/FormsControl"
import { maxLengthCreator, required } from "../../utils/Validator/validator"

// redux-form validation
let maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">

            <div>
                <Field  
                    placeholder="Enter your message" 
                    name="newMessageBody" 
                    component={Textarea}
                    validate={[required,maxLength50]}

                />
               
            </div>
            <div><button>Send Message</button></div>
        </form>

    )

}
export default reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
