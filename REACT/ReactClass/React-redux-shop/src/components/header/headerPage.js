import React from 'react'
import './headerPage.css'
import {Link} from 'react-router-dom'

export const HeaderPage = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link className={'logo text-dark'} to="/">ReStore</Link>
            <Link to={'/cart'}>
                <div className={'shopping-cart'}>
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {numItems} items (${total})
                </div>
            </Link>

        </header>
    )
}
