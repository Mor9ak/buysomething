import React from 'react';
import Image from 'next/image'

export interface CardProps {
    title: string;
    text?: string;
    imgSrc?: string;
    description?: string;
}

const Card = (props: CardProps) => {
    return (
        <div
            className={'flex flex-col bg-cardBgdCol justify-center items-center uniBorder rounded-lg w-[40vw] md:w-[30vw] max-w-[44vw] md:max-w-[25vw] uniPadding gap-5 shadow-lg shadow-accentCol/20'}>
            <h3 className={'text-mainTextCol text-2xl text-center'}>{props.title}</h3>
            {props.text && <h4 title={props.text} className={'text-textCol text-xl truncate max-w-[34vw] md:max-w-[20vw]'}>{props.text}</h4>}
            {props.imgSrc &&
                <div className={'flex justify-center items-center w-[40vw] box-border md:w-[20vw] aspect-square'}>
                    <Image src={props.imgSrc} alt={props.title} width={100} height={100}
                           className={'w-full h-full rounded-xl object-cover'}/>
                </div>}
            {props.description && <p className={'text-secTextCol'}>{props.description}</p>}
        </div>
    );
}

export default Card;