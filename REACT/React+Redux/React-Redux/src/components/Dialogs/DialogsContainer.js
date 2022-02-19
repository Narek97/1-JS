
import { addMessageActionCreator, } from "../../Redax/DialogsReducer"
import Dialogs from "./Dialogs"
import  {connect}  from "react-redux"
import { witAouthRedirect } from "../../HOC/witAoutRedirect"
import { compose } from "redux"



let  mapStateToProps = (state)=>{
    
    return{
        dialogsPage:state.dialogsPage,
        isLogin:state.login.isAuth
    }
}
let mapDispatchTooProps = (dispatch)=>{
     return{
        onSendMessage:(newMessageBody)=>{dispatch(addMessageActionCreator(newMessageBody)) },
    }
}



// High Order Component (hoc)
// let AuthRedirectComponent=witAouthRedirect(Dialogs)

// const DialogsContainer=connect(mapStateToProps,mapDispatchTooProps)(AuthRedirectComponent)

// export default DialogsContainer

// esqany irar xmbavorelu hamr ogtagortum enq compose funkchian

export default compose(
    connect(mapStateToProps,mapDispatchTooProps),
    witAouthRedirect
)(Dialogs) 