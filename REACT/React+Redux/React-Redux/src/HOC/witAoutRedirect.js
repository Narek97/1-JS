import React from "react"
import {Redirect} from "react-router-dom"


// High Order Component (hoc)
export const witAouthRedirect = (Component)=>{
    class RedirectComponent extends React.Component {
        render(){
        if(!this.props.isLogin){
            // Redirect mi ejich myus ej texapoxelu hamar
             return <Redirect to="/login" />
          }
           return <Component {...this.props}/>
       }
   }

   return RedirectComponent
}