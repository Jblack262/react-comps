import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/Home';
import Login from './components/pages/Login';
function App() {
    
    return (
        <div id="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/login" exact component={() => <Login />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
