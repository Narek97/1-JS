import React, { useState,useEffect } from "react"

const ProfileiStatusHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
    
  },[props.status])


  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)

  }

  const onStatusChange=(e)=>{
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {
        !editMode ?
          <div>
            <span onDoubleClick={() => setEditMode(true)} >{props.status ? props.status : "No Status"}</span>
          </div> :
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
              type="text"
            />
          </div>
      }
    </div>

  )

}

export default ProfileiStatusHooks