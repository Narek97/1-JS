import React from 'react'
import BookListItem from "../bookListItem/bookListItem";

export const BookList = ({books,onAddedToCart}) => {
    return (
        <div>
            <ul className={'book-list'}>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem
                                    book={book}
                                    onAddedToCart={()=>onAddedToCart(book.id)}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
