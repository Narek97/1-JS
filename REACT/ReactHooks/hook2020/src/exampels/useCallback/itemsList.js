import React, {useEffect, useState} from 'react'

const Itemslist = ({getItem}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log('efect')
        const newItems = getItem()
        setItems(newItems)
    }, [getItem])
    return (
        <ul>
            {
                items.map(i => <li key={i}>{i}</li>)
            }
        </ul>
    )
}

export default Itemslist
