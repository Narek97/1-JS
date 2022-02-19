import updateBookList from "./bookList-reducer";
import updateShoppingCart from "./shopinCart-reducer";


const reducer = (state, action) => {

    return {
        booklist: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
    }


};

export default reducer
