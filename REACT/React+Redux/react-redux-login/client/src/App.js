import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//store -  reducernery componentnerin talu hamar
import store from './ReduxStore/ReduxStore'
// Provider - story poxancgelu hamar
import { Provider } from "react-redux"
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';


function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path='/Login' render={() => <Login />} />
            <Route path='/Signup' render={() => <Registration />} />
          </Switch>
        </Provider>
      </Router>

    </div>
  )
}

export default App
