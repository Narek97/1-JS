import React, {useContext} from 'react'
import {CountContent} from "./AppReducer";


export default () => {
    const countContext = useContext(CountContent)
    return (
        <div>
            ComponentD- {countContext.countState}
            <button onClick={() => countContext.dispatchState('increment')}>Increment</button>
            <button onClick={() => countContext.dispatchState('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatchState('reset')}>Reset</button>

        </div>
    )
}

