import React from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName:''
        }
    }


    onLabelChange = (e) => {
        this.setState({
            itemName:e.target.value.toUpperCase()
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdd(this.state.itemName)
        this.setState({
            itemName:''
        })

    }
    render() {
        return(
            <form className={'item-add-form d-flex'} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.itemName}
                    onChange={this.onLabelChange}
                    placeholder={'What needs to be done'}
                />
                <button
                    className="btn btn-outline-secondary"
                    type='submit'
                >
                    Add Item
                </button>
            </form>
        )
    }
}
