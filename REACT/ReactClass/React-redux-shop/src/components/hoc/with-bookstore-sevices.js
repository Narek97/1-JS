import React from 'react';
import {BookeStoreConsumer} from "../bookstore-context/bookstore-context";

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookeStoreConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped
                                {...props}
                                bookstoreService={bookstoreService}
                            />
                        )
                    }
                }
            </BookeStoreConsumer>
        );
    }
};

export default withBookstoreService
