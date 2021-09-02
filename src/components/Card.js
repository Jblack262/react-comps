import React from 'react'

function Card(props) {
    const {card} = props;
    return (
        <div className="card">
            <h3>{card.title}</h3>
            <p className="content">{card.content}</p>
            <p className="name">{card.name}</p>
        </div>
    )
}

export default Card
