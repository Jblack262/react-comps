import React from 'react'
import Card from './Card'

function CardGrid({content}) {
    return (
        <div>
            {content.map((card) => {
                // const {title, content, name} = card;
                return (
                    <Card key={card.id} card={card}/>
                );
            })}
        </div>
    )
}

export default CardGrid
