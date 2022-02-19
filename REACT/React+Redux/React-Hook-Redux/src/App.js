import React from 'react'
import store from './Redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Car from './Component/Car'
import AddCar from './Component/AddCar'
import NavBar from './Component/NavBar';

export default App => {

  return (
    <Provider store={store}>
      <Router>
      <NavBar/>
        <Switch>   
          <Route path="/Car" component={Car}></Route>
          <Route path="/AddCar" component={AddCar}></Route>
        </Switch>
      </Router>
    </Provider>
  );

}