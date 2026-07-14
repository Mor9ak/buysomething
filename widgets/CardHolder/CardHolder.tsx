import React from 'react';
import Card from "@/shared/Card";
import cards from '@/lib/cards/data/cards.json'
import {CardProps} from "@/shared/Card";
import Link from "next/link";


const CardHolder = () => {
    return (
        <ul className={'flex flex-row gap-7 justify-center items-start'}>
            {cards.map((card : CardProps, i) => (
                <li key={i}>
                    <Link href={`/productPage/${card.id}`}>
                        <Card title={card.title}  imgSrc={card.imgSrc } text={card.text} description={card.description} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CardHolder;