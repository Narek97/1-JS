import React, {useEffect, useState} from "react";

export default () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse');
        setX(e.clientX)
        setY(e.clientY)
    }



    // componentdidmount
    useEffect(()=>{
        console.log('useEffect');
        window.addEventListener('mousemove',logMousePosition)

        //componentwillunmount
        return () => {
            console.log('remove useEffect')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}
