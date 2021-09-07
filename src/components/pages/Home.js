import React from 'react'

import Navbar from '../Navbar';
import CardGrid from '../CardGrid';
import {cardInfo} from "../../util/cardInfo";
import Accordion from '../Accordion';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <CardGrid content={cardInfo}/>
            <Accordion/>
        </div>
    )
}

export default Home