import React from 'react'
import './shoppingCartTable.css'
import {connect} from "react-redux";
import {onDecrease, onDelete, bookAddedToCart} from '../../redux/actions'


const ShoppingCartTable = ({items, order, onIncrease, onDecrease, onDelete,}) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>
                {
                    items.map((item, index) => {
                        const {id, title, count, total} = item
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>${total}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="btn btn-outline-danger btn-sm float-right">
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                    <button
                                        onClick={() => onIncrease(id)}
                                        className="btn btn-outline-success btn-sm float-right">
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button
                                        onClick={() => onDecrease(id)}
                                        className="btn btn-outline-warning btn-sm float-right">
                                        <i className="fa fa-minus-circle"/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }

                </tbody>
            </table>
            <div className={'total'}>
                Total: ${order}
            </div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {

    return {
        items: cartItems,
        order: orderTotal
    }
}

const mapDispatchToProps = {

    onIncrease: bookAddedToCart,
    onDecrease,
    onDelete,

}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
