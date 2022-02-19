// import Post from './models/post'
// import json from "./assets/json"
// import WebpackLogo from "./assets/logo.jpg"
import React from 'react'
import { render } from 'react-dom'
import './babel'
import "./styles/styles.css"



// const post = new Post("Webpack Title")

// console.log(post)
// console.log(WebpackLogo)
// console.log("json",json)


const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr />
        <div className="logo" />
        <hr />
    </div>
)

render(<App />, document.getElementById('app'))