import {useHttp} from '../Api/Api'

let defaultState = {
    _id:'',
    name:'',
    surname:'',
    email:''
}
const RegReducer=(state=defaultState,action)=>{
  
    switch (action.type) {
        case 'Set-User-Data':
         return{
             ...state,
             ...action.data,
         }
        default:
            return state;
    }

}

// action reducery popoxelu hamar
export const SetUserData = (_id, name,surname,email) => ({ type: "Set-User-Data", data: { _id, name,surname,email} })
// asinxron hardumov reducery popoxel,dispatch partadira vor asinxron ashxati
export const getAuthUserData =  (data) => async (dispatch) => {
    
        // hardum serverin
        let res = await  useHttp.getUsers('/api/auth/registr', "POST", { ...data })
      
        if(res.data.message==='ok'){

            let  {_id, name,surname,email} = res.data.user
            dispatch(SetUserData(_id, name,surname,email))
        } 
}

export default RegReducer
