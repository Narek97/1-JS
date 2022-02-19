import React, {useEffect, useMemo, useState} from 'react';

//usememoyi ognutyamb amen angam ete componenty rendera linum u funkcia ka
//vory avtomat ashxatuma nench anenq vor ete tvyaly chi poxve chashxati
//vor arhestakan chtanrabernvi componenty

function App() {

    function complexCompute(num) {
        let i = 0
        while (i < 1000000000) i++
        return num * 2
    }

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const style = useMemo(() => {
        return {
            color: colored ? 'darkred' : 'black'
        }
    },[colored])


    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Style changed')
    }, [style])

    return (
        <div className="App">
            <h1 style={style}>Zagalovk {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>+</button>
            <button onClick={() => setNumber(prev => prev - 1)}>-</button>
            <button onClick={() => setColored(prev => !prev)}>izmenit</button>

        </div>
    );
}

export default App;
