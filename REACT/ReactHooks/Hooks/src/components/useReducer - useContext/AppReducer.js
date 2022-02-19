import React, {useReducer} from 'react'
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContent = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


export default () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContent.Provider value={{countState:count, dispatchState:dispatch}}>
            <div>
                Count - {count}
                <ComponentA/>
                <ComponentB/>
                <ComponentC/>
            </div>
        </CountContent.Provider>
    );
}
