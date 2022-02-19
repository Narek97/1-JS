import React,{useState} from 'react'

// customHook
function useInputValue(defaultValue=''){
    const [value, setValue] = useState('')
    return {
        bind:{
            value,
            onChange:e=>setValue(e.target.value),
        },
        clear:()=>setValue(''),
        value:()=>value
    }
}



function AddTodo({onCreate}) {

    const input = useInputValue('')
    
    const submit = e =>{
        e.preventDefault()
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }
    
    return (
        <form onSubmit={submit}   style={{marginBottom:'1rem'}}>
            <input {...input.bind} />
              
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddTodo
