import React,{useState,useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

function Form() {

    const [value,setValue] = useState('')
    const alert = useContext(AlertContext)
    const firbase = useContext(FirebaseContext)
    
    const submitAlert = e => {
        e.preventDefault()
        alert.show(value,'success')
        if(value.trim()){
            firbase.addNote(value.trim()).then(()=>{
                alert.show('Note was created','success')
            }).catch(()=>{
                alert.show('Something went wrong','danger')   
            })
            setValue('')
        }else{
            alert.show('Add name','')
        }
    }


    return (
       <form onSubmit={submitAlert}>
           <div className='form-group'>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='Add name'
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />
           </div>
       </form>
    )
}

export default Form
