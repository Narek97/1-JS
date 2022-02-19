import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {HomePage} from "./components/pages/home/homePage";
import {CartPage} from "./components/pages/cartPage/cartPage";
import {HeaderPage} from "./components/header/headerPage";

function App() {
    return (
        <main role="main" className="container">
            <HeaderPage numItems={5} total={210}/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact
                />
                <Route
                    path="/cart"
                    component={CartPage}
                />
            </Switch>
        </main>

    );
}

export default App;
