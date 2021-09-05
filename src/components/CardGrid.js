import React from 'react'
import Card from './Card'

function CardGrid({content}) {
    const [info, setInfo] = React.useState(content);

    
    const onHover = (id) => {
        let reset = info.map((card) => {
            if (card.isSelected) card.isSelected = false;
            return card;
        });
        setInfo(reset)

        let selectedCards = info.filter((card, index) => index > id -1);
        let unselectedCards = info.filter((card, index) => index <= id -1);

        selectedCards.forEach((card) => {
            card.isSelected = true;
        })
        
        let result = unselectedCards.concat(selectedCards);
        setInfo(result);
    }
    const handleMouseLeave = () => {
        let reset = info.map((card) => {
            if (card.isSelected) card.isSelected = false;
            return card;
        });
        setInfo(reset)
    }
    return (
        <div className="cardGrid" onMouseLeave={handleMouseLeave}>
            {info.map((card, index) => {
                // const {title, content, name} = card;
                // console.log(index);
                return (
                    <Card card={card} key={index} test={index} cName={"card" + (card.isSelected ? " selected" : "")} onHover={onHover}/>
                    //<div className="cardContainer" key={card.id} onMouseOver={() => {handleHover(card.id)}}></div>
                );
            })}
        </div>
    )
}

export default CardGrid