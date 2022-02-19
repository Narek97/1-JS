let defaultState = {
    email: "",
    password:""
   
}


const LoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LogData':
            console.log(111,action.data)
            return{...state,email:action.data.email,password:action.data.password}

            default:
                return state;
    }

}


export const login = (data) => ({type: 'LogData', data})
    
   


export default LoginReducer