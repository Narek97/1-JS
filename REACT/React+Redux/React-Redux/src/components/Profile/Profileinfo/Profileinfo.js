import React from "react"
import s from "./Profileinfo.module.css"
import Preloader from "../../Compon/Preloader"
// import ProfileiStatus from "./ProfileiStatus"
import avatar from "../../../photo/avatar.jpg"
import ProfileiStatusHooks from "./ProfileiStatusHooks"

const Profileinfo = (props) => {

  if(!props.profile){
      return <Preloader/>
  }

  const mainFotoSelected=(e)=>{
    
        props.savePhoto(e.target.files[0])
    
  }

  return (
    <div className={s.content}>
      {/* <div className={s.backgroundfoto}>
        <img src="http://onlinetao.ru/blog/wp-content/uploads/2015/07/hq-wallpapers_ru_nature_35955_1920x1200.jpg" alt="" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img width="100px" src={props.profile.photos.large?props.profile.photos.large:avatar} alt=""/>  
        
        {/* avatari nkary poxel  */}
        {props.isOwner? "":<input onChange={mainFotoSelected} type="file"/> }
        <ProfileiStatusHooks updateStatus={props.updateStatus} status={props.status} />
      </div>

    </div>

  )
}

export default Profileinfo