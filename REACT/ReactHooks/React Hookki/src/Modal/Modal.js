import React, { Component } from 'react'
import './modal.css'

export class Modal extends Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={()=>this.setState({isOpen:true})}>Open Modal</button>
                {
                   this.state.isOpen && <div className='modal'>
                        <div className="modal-body">
                            <h1>Modal title</h1>
                            <p>I am awesome modal</p>
                            <button onClick={()=>this.setState({isOpen:false})}>Close Modal</button>
                        </div>
                    </div>
                }

            </React.Fragment>
        )
    }
}

export default Modal

