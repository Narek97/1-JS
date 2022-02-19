const updateBookList = (state, action) => {
    if (state === undefined) {
        return {
            books: [],
            loading: true,
            error: null,
        };
    }
    switch (action.type) {
        case "FETCH_BOOKS_REQUESTED":
            return {
                book: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
                error: null

            };
        case "FETCH_BOOKS_ERROR":
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.booklist;
    }
};

export default updateBookList;
