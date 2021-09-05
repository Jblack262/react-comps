import React from 'react'

import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import {cardInfo} from "./util/cardInfo";

function App() {
    
    return (
        <div id="App">
            <Navbar />
            <CardGrid content={cardInfo}/>
        </div>
    )
}

export default App
