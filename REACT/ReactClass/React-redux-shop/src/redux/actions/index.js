const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUESTED",
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_LOADED',
        payload: newBooks
    }
}


const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_ERROR',
        payload: error
    }
}

const FetchBooks = (dispatch, bookstoreService) => () => {

    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data))
        })
        .catch((err) => {
            dispatch(booksError(err))
        })
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}


const onDecrease = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}

const onDelete = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVE_FROM_CART',
        payload: bookId
    }
}

export {
    FetchBooks,
    bookAddedToCart,
    onDecrease,
    onDelete
};
