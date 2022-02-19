import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "./actionType";

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch('/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        dispatch({
            type: FETCH_PRODUCTS,
            payload: json,
        });
    } catch (e) {
        console.log(e);
    }

};

export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === ""
                ? products
                : products.filter(x => x.availableSizes.indexOf(size) >= 0)

        }
    })
}

export const sortProducts = (filterProducts, sort) => (dispatch) => {
    const sortedProducts = filterProducts.slice()
    if (sort === 'latest') {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1))
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest"
                ? a.price > b.price ? 1 : -1
                : a.price < b.price ? 1 : -1
        )

    }
    dispatch(
        {
            type: ORDER_PRODUCTS_BY_PRICE,
            payload: {
                sort: sort,
                items: sortedProducts
            }
        }
    )
}


