import React from "react"
import loading from "../../photo/loading.gif"

let Preloader = ()=>{
    return(

        <div>
            <img width="100px" src={loading} alt=""/>
        </div>

    )
}

export default Preloader