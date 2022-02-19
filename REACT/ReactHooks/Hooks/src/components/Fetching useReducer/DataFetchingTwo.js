import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

export default () => {

    const initialState = {
        loading: true,
        error: '',
        post: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    leading: false,
                    error: '',
                    post: action.payload
                }
            case 'FETCH_ERROR':
                return {
                    leading: false,
                    error: 'server error',
                    post: {}
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})

            })
    }, [])

    return (
        <div>
            {
                state.loading ? 'Loading...' : state.post.title
            }
            {
                state.error ? state.error : null
            }
        </div>
    )
}
