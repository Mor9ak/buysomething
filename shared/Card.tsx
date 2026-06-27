import React from 'react';

export interface CardProps {
    title: string;
    text: string;
    children?: React.ReactNode;
    description?: string;
}

const Card = (props: CardProps) => {
    return (
        <div className={'flex flex-col bg-secBgCol border-2 rounded-b-md w-fit uniPadding gap-5'}>
            <h3 className={'text-mainTextCol text-2xl'}>{props.title}</h3>
            <h4 className={'text-textCol text-xl'}>{props.text}</h4>
            {props.children}
            <p className={'text-secTextCol'}>{props.description}</p>
        </div>
    );
}

export default Card;