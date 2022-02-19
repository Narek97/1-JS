import React from "react"
import s from "./Posts.module.css"
const Posts = (props) => {
  return (
    <div>

      <div className={s.item}>
        <img src="https://s.yimg.com/ny/api/res/1.2/7bbMUDnuJ0DeybIOk_CVzQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/68ead40c4b63a59b3c33c2e01a647f19" alt="" />
        <span>{props.message}</span>
        <div>
          <span>like {props.like}</span>
        </div>

      </div>

    </div>
  )
}

export default Posts