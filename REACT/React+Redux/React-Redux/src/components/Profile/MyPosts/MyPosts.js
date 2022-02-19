import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Posts"
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from "../../../utils/Validator/validator"
import { Textarea } from "../../Compon/FormsControl/FormsControl"


const MyPosts = (props) => {
 
  let addNewPost=(value)=>{
    
    props.addPost(value.newPostBody)
  }


  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My post</h3>
      </div>
      <div>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
      <div>
        {
          props.posts.map((a, index) => <Post key={index} message={a.message} like={a.like} />)
        }
      </div>

    </div>
  )
}



// redux-form

// redux-form validation
let maxLength10 = maxLengthCreator(10)
const MyPostReduxForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} action="">

      <div>
        <Field
          placeholder="add post ..."
          name="newPostBody"
          // redux-form validation
          component={Textarea}
          validate={[required,maxLength10]}
        />
      </div>
      <div>
    <button>Add post</button><br /><br />
      </div>
    </form>

  )


}

const AddPostFormRedux = reduxForm({
  form: 'ProfileAddPostForm'
})(MyPostReduxForm)


