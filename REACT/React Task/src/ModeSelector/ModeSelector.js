import React from 'react'

export default (props) => {

    const smallUrl = `http://www.filltext.com/?rows=32&id={number|
    1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}|
    (xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    const bigUrl = `http://www.filltext.com/?rows=1000&id={number|
    1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone}|
    (xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    return (
        <div style={{display: 'flex', justifyContent: 'center',marginTop: '50px'}}>
            <button onClick={() => props.onSelect(smallUrl)} className="btn btn-primary">32 element</button>
            <button onClick={() => props.onSelect(bigUrl)} className="btn btn-danger">1000 element</button>
        </div>
    )
}