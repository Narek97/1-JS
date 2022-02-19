import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
// import { Field, reduxForm } from 'redux-form'
// import { Textarea } from "../Compon/FormsControl/FormsControl"
// import { maxLengthCreator, required } from "../../utils/Validator/validator"
import AddMessageForm from "./AddMesageForm"



const Dialogs = (props) => {

 
    let addNewMessage=(value)=>{

         props.onSendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    props.dialogsPage.dialogs.map((a, index) => <DialogItem key={index} name={a.name} id={a.id} />)
                }

            </div>
            <div className={s.messages}>
                <div>
                    {
                        props.dialogsPage.messages.map((a, index) => <Message key={index} message={a.message} id={a.id} />)
                    }
                </div>

            </div>
            <div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

// redux-form

// redux-form validation
// let maxLength50 = maxLengthCreator(50)

// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit} action="">

//             <div>
//                 <Field  
//                     placeholder="Enter your message" 
//                     name="newMessageBody" 
//                     component={Textarea}
//                     validate={[required,maxLength50]}

//                 />
               
//             </div>
//             <div><button>Send Message</button></div>
//         </form>

//     )

// }

// const AddMEssageFormRedux=reduxForm({
//     form: 'dialogAddMessageForm'
// })(AddMessageForm)

export default Dialogs