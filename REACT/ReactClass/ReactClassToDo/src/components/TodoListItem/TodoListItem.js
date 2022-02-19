import React, {Component} from 'react'
import './TodoListItem.css'

export class TodoListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleDone,done, important} = this.props
        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }
        return (
            <span className={classNames}>
            <span
                className='todo-list-item-label'
                onClick={onToggleDone}
            >
            {label}
            </span>

            <button
                type='button'
                className='btn outline-success btn-success'
                onClick={onToggleImportant}
            >
               <i className='fa fa-exclamation'/>
            </button>
            <button
                type='button'
                className='btn outline-danger btn-danger'
                onClick={onDelete}
            >
                <i className="fas fa-trash"></i>
            </button>

        </span>

        )
    }
}


