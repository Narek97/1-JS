
import { addPostActionCreator } from "../../../Redax/ProfileReducer"
import MyPosts from "./MyPosts"
import  {connect}  from "react-redux"

const mapStateToProps =(state)=>{
  return{
    posts:state.ProfilePage.posts,
    newPostText:state.ProfilePage.newPostText
  }
}

const mapDispatchTooProps=(dispatch)=>{
  return{

    addPost:(newPostBody)=>{dispatch(addPostActionCreator(newPostBody)) },
  
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchTooProps,)(MyPosts)

export default MyPostsContainer