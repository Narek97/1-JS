
import axios from 'axios'

// serverin hardum uxarkelu hamar
export const useHttp ={
    // metod
    getUsers  (url, method = "GET", body = null,){
        try {
           
           return axios({ method, url, data:body })
        }
        catch (e) {
            console.log('error')
        }
    },
   
}