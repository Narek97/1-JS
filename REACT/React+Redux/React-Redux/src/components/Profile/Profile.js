import React from "react"
import Profileinfo from "./Profileinfo/Profileinfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"


const Profile = (props) => {

  return (
    <div>
      <Profileinfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer // store={props.store} />       
      />
    </div>
  )
}

export default Profile