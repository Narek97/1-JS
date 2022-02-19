import React,{useContext} from 'react'
import ComponentF from "./ComponentF";
import {ChanelContent, UserContent} from "./ComponentC";

//Tvyalneri stachum useContext ognutyamb

export default () => {

   const user = useContext(UserContent)
   const chanel =  useContext(ChanelContent)

    return(
        <div>
            {/*<ComponentF/>*/}
            user context {user}, chanel context {chanel}

        </div>
    )
}
