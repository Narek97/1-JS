import React, {useEffect, useState} from 'react';


function App() {

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })
    // useEffect(()=>{
    //     console.log('render')
    // })

    useEffect(() => {
        console.log(`type chage ${type}`)
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type')
        }
    }, [type])

    const mouseMoveHandler = e => {
        setPos({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        console.log('didMount')
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)

        }
    }, [])

    return (
        <div className="App">
            <h1>Resurs:{type}</h1>
            <button
                onClick={() => setType('users')}
                className={'btn btn-danger'}
            >User
            </button>
            <button
                onClick={() => setType('todos')}
                className={'btn btn-danger'}
            >Todo
            </button>
            <button
                onClick={() => setType('posts')}
                className={'btn btn-danger'}
            >Posts
            </button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>

        </div>
    );
}

export default App;
