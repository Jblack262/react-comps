import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Error from './components/pages/Error';
function App() {
    
    return (
        <div id="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/login" exact component={() => <Login />} />


                    <Route exact component={() => <Error />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
