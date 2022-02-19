import React from 'react'
import TodoItem from './TodoItem'

const style = {
    ul:{
        listStyle:'none',
        padding:0
    }
}

function TdoList(props) {
  
    return (
        <div>
            <ul style={style.ul}>
                {
                    props.todo.map((t,i)=>{
                      return  <TodoItem key ={t.id} todo={t} index={i} onChange={props.onToggle}/>
                    })
                }
               
            </ul>
        </div>
    )
}

export default TdoList
