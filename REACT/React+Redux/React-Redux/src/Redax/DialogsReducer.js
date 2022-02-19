
let defaultState={
    messages: [
        { id: 1, message: "hi1" },
        { id: 2, message: "hi2" },
        { id: 3, message: "hi3" },
        { id: 4, message: "hi4" }
    ],
    dialogs: [
        { id: 1, name: "Dimich1" },
        { id: 2, name: "Dimich2" },
        { id: 3, name: "Dimich3" },
        { id: 4, name: "Dimich4" }
    ],

};

const DialogsReducer = (state=defaultState,action)=>{

    switch(action.type){

        case "Send-Message":
            let newMessage = action.newMessageBody
            return{   
            ...state,
    
            messages:[...state.messages,{id:6,message:newMessage}]
        };
        default:{ 
            return state
        }

    }
 
}

export const addMessageActionCreator = (newMessageBody) => 
 ( {type: "Send-Message",newMessageBody})   

export default DialogsReducer