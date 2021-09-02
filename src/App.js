import React from 'react'

import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import {cardInfo} from "./cardInfo";

function App() {
    return (
        <div>
            <Navbar />
            <CardGrid content={cardInfo}/>
        </div>
    )
}

export default App
