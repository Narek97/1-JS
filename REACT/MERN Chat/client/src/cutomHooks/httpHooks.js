import { useCallback } from "react"
import axios from 'axios'

export const useHttp = (met) => {

    const request = useCallback(async (url, method = "GET", body = null, ) => {

        try {
            let res = await axios({ method, url, data:body })
            return res.data

        }
        catch (e) {
            console.log('error')
        }


    }, [])

    return { request }
}


