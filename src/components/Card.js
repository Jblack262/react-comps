import React from 'react'

function Card({card, cName, onHover, test}) {
    const  {title, content, name} = card;
    const [isHovering, setHovering] = React.useState(false);

    const handleHover = (id) => {
        onHover(id + 1);
        
        setHovering(true);
    }

    return (
        <div>
            <div className={cName + (isHovering ? " hovering" : "")} onMouseOver={() => {handleHover(test)}} onMouseLeave={() => {setHovering(false)}}>
                <h3>{title}</h3>
                <p className="content">{content}</p>
                <p className="name">{name}</p>
            </div>
        </div>
    )
}

export default Card
