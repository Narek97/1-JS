import React from 'react'
import './BookList.css'
import {connect} from 'react-redux'
import withBookstoreService from '../hoc/with-bookstore-sevices'
import {bookAddedToCart, FetchBooks} from "../../redux/actions";
import {Spinner} from "../spiner/spinner";
import {ErrorIndicator} from "../error-indicator/error-indicator";
import {BookList} from "./BookList";

class BookListContainer extends React.Component {


    componentDidMount() {
        this.props.FetchBooks()
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>

    }
}

const mapStateToProps = ({booklist: {books, loading, error}}) => {
    return {
        books,
        loading,
        error
    }
};

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };

//mapDispatchToProps erkrord parametr stanuma props ete urish funkchiyi mijova kanchvum
const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps
    return {
        FetchBooks: FetchBooks(dispatch, bookstoreService,),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default withBookstoreService()(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(BookListContainer)
);
