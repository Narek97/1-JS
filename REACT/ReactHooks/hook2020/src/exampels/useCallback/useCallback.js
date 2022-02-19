import React, {useCallback, useState} from 'react';
import Itemslist from "./itemsList";


function App() {

    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const style = {
        color: colored ? 'red' : 'black'
    }

    const generateItemsFromAPI = useCallback(()=>{
        return new Array(count).fill('').map((v, i) => {
            return `Element ${i + 1}`
        })
    },[count])




    return (
        <div className="App">
            <h1 style={style}>Kalichestva elementov:{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setColored(prev => !prev)}>izminit</button>
            <Itemslist getItem={generateItemsFromAPI}/>
        </div>
    );
}

export default App;
