import React from "react"
import s from "./FormsControls.module.css"

const FormControl = ({ meta, ...props }) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.formControl + " " + s.error : ""}>
            <div>
                {props.children}
            </div>
            {hasError ? <span>{meta.error}</span> : ""}

        </div>
    )

}


export const Textarea = (props) => {
    const { input } = props
    return <FormControl {...props} >
        <textarea {...input} {...props} />
    </FormControl>
}


export const Input = (props) => {
    const { input } = props
    return <FormControl {...props} >
        <input {...input} {...props} />
    </FormControl>

}





// export const Textarea = ({ input, meta, ...props }) => {

//         const hasError = meta.touched && meta.error
//     return (
//         <div className={hasError?s.formControl + " " + s.error:""}>
//             <div>

//                 <textarea {...input} {...props} />
//             </div>
//             {hasError? <span>{meta.error}</span>:""}

//         </div>
//     )
// }

