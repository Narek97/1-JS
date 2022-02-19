import React, {Component} from 'react'
import './ItemStatusFilter.css'

export class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render() {

        const {filter,onFilterChange} = this.props;
        const button = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive?'btn-info':'btn-outline-secondary'
                return (<button
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >{label}</button>)
            }
        )
        return (
            <div className='item-status-filter'>
                {button}
            </div>
        )
    }
}
