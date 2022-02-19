import React from 'react';
import classes from './backdrop.css'

const Backdrop = props => {
    return(
        <div
            className={classes.Backdrop}
            onClick={props.onClick}
        >

        </div>
    )
}

export default Backdrop
