import axios from "axios"
const url = "https://social-network.samuraijs.com/api/1.0/"


export const getUsers=(currentPage,pageSize)=>{
  return   axios.get(`${url}users?page=${currentPage}&${pageSize}`,{
    withCredentials: true,
    }).then(res=> res.data)
}

export const UnfollowUsers=(dataID)=>{
    console.log(dataID)
   return axios.delete(`${url}follow/${dataID}`, {
        withCredentials: true,
        headers: {  'API-KEY': '0cb76e9b-0088-479b-8df8-158ed0adbfd1' }

    }).then(res=>res.data)
}

export const followUsers=(dataID)=>{
    console.log(dataID)
   return axios.post(`${url}follow/${dataID}`,{},{
        withCredentials:true,
        headers:{ 'API-KEY': '0cb76e9b-0088-479b-8df8-158ed0adbfd1'}

    }).then(res=>res.data)
}

export const getProfil = (userID)=>{
    console.warn("warning")

  return profileAPI.getProfil(userID)
}


export const loginUser = ()=>{
    return  axios.get(`${url}auth/me`,{
        withCredentials:true
    }).then(res=>res.data)  
}

// anyndhat export chgrelu hamar
export const profileAPI={
    getProfil(userID){
        return axios.get(`${url}profile/${userID}`)
    },
    getStatus(userID){
        return axios.get(`${url}profile/status/${userID}`)
    },
    updateStatus(status){

        return axios.put(`${url}profile/status`,{status})
    },
    savePhoto(fhotoFile){
        const formData = new FormData()
        formData.append("image",fhotoFile)

        return axios.put(`${url}profile/photo`,{formData},{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })

    }
    
}

export const authAPI={
    login(email,password,remebrMe=false){
        return axios.post(`${url}auth/login`,{email,password,remebrMe})
    },
    logout(){
        return axios.delete(`${url}auth/login`)
    },
     
}




