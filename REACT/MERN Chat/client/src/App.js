import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Reg from "./components/Registration/Registration"
import Home from './components/Home/Home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact render={()=><Reg/>} />
          <Route path='/home' render={()=><Home/>}/>
        </Switch>
      </Router>

    </div>
  )
}

export default App
