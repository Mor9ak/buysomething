import React from 'react';
import Card from "@/shared/Card";
import cards from './data/cards.json'
import {CardProps} from "@/shared/Card";


const CardHolder = () => {
    return (
        <ul className={'flex flex-row gap-7 justify-center items-start'}>
            {cards.map((card : CardProps, i) => (
                <li key={i}>
                    <Card title={card.title}  imgSrc={card.imgSrc } text={card.text} description={card.description} />
                </li>
            ))}
        </ul>
    );
}

export default CardHolder;