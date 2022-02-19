import React from 'react'
import './homePage.css'
import BookList from "../../bookList/BookListContainer";
import ShoppingCartTable from "../../shopingCartTable/shoppingCartTable";

export const HomePage = () => {

    return (
        <div>
            <BookList/>
            <ShoppingCartTable/>
        </div>
    )
}
