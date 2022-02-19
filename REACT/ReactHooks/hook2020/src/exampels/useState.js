import React, {useState} from 'react';

function computeInitialCounter() {
    console.log('Same calculations...')
    return Math.trunc(Math.random() * 20)
}


function App() {
    // const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = useState(computeInitialCounter())
    const [counter, setCounter] = useState(() => computeInitialCounter())

    const [date, setDate] = useState({
        title: 'Shotchik',
        date: Date.now()
    })


    const increment = () => {

        // setCounter(counter + 1)
        // setCounter(counter + 1)


        setCounter(prevState => {
            return prevState + 1
        })
        setCounter(prev => prev + 1)

    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const updateTitle = () => {
        setDate(prev => {
            return {
                ...prev,
                title: 'new title'
            }
        })
    }

    return (
        <div className="App">
            <h1>Shochik : {counter}</h1>
            <button onClick={increment} className="btn btn-primary">+</button>
            <button onClick={decrement} className="btn btn-danger">-</button>

            <pre>{JSON.stringify(date, null, 2)}</pre>
            <button onClick={updateTitle} className="btn btn-success">Izmini title</button>

        </div>
    );
}

export default App;
