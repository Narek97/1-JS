import React from 'react'
import './TodoList.css'
import {TodoListItem} from "../TodoListItem/TodoListItem";


export const TodoList = ({todos,onDelete,onToggleImportant,onToggleDone}) => {
    const element = todos.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <TodoListItem
                    {...item}
                    onDelete={()=>onDelete(item.id)}
                    onToggleImportant={()=>onToggleImportant(item.id)}
                    onToggleDone={()=>onToggleDone(item.id)}
                />
            </li>
        )
    })
    return (
        <ul className='list-group todo-list'>
            {element}
        </ul>
    )

}
