import React, { useReducer } from 'react'
import Axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER, REMOVE_NOTES, ADD_NOTE, FETCH_NOTES } from '../types'


const url = process.env.REACT_APP_DB_URL

const initialState = {
  notes: [],
  loading: false
}

function FirebaseState({ children }) {
  const [state, dispatch ] = useReducer( firebaseReducer, initialState)
 
  const showLoader = () => dispatch({ type: SHOW_LOADER })
  const fetchNotes = async () => {
    showLoader()
    const res = await Axios.get(`${url}/notes.json`)
    if(res.data===null){
      dispatch({
        type:FETCH_NOTES,payload:[]
      })
      return
    }
    
    let payload = Object.keys(res.data).map(key=>{
      return {
        ...res.data[key],
        id:key
      }
    })

    dispatch({
      type:FETCH_NOTES,payload
    })
  }

  const addNote = async title => {
    const note = {
      title, date: new Date().toJSON()
    }
    try {
      const res = await Axios.post(`${url}/notes.json`, note)
      const payload = {
        ...note,
        id:res.data.name
      }

      dispatch({
        type:ADD_NOTE,
        payload
      })
    } catch (error) {
      console.log(error) 
    }

  }


  const removeNote = async id => {
    await Axios.delete(`${url}/notes/${id}.json`)

    dispatch({
      type: REMOVE_NOTES,
      payload: id
    })

  }
  return (
   
    <FirebaseContext.Provider
      value={{showLoader,addNote,removeNote,fetchNotes,
        loading:state.loading,
        notes:state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState
