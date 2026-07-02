import React from 'react';

export interface ArticleProps {
    title: string;
    text?: string;
    style?: string;
}

const Article = (props: ArticleProps) => {
    return (
        <article className={`flex flex-col w-[90vw] text-center justify-center items-center font-bold text-mainTextCol gap-5 ${props.style}`}>
            <h2 className={'text-shadow-sm text-shadow-accentCol text-2xl'}>{props.title}</h2>
            {props.text && <h4 className={'text-xl'}>{props.text}</h4>}
        </article>
    );
}

export default Article;