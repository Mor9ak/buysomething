import React from 'react';
import Article from "@/shared/Article";
import text from './data/text.json';

const Page = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-7">
            <Article title={text.article.title}/>
            <article
                className={'flex flex-col uniPadding uniBorder text-center gap-5 flex-wrap max-w-[80vw] md:max-w-[70vw]'}>
                <h2 className={'font-bold text-4xl text-textCol'}>{text.textBlock.h2}</h2>
                <h3 className={'font-bold text-2xl text-textCol'}>{text.textBlock.h3}</h3>
                <p className={'text-xl text-secTextCol'}>{text.textBlock.p}</p>
            </article>
            <section className={'flex flex-col justify-center items-center gap-5 uniBorder uniPadding'}>
                <h3 className={'font-bold text-2xl text-textCol'}>{text.section.h3}</h3>
                <ul className={'flex flex-col md:flex-row gap-5 '}>
                    {text.section.links.map((link: { title: string, href: string }, index: number) => (
                        <li key={index}>
                            <a href={link.href} className={'bg-accentCol text-textCol px-5 py-2 rounded-full'}
                               target={'_blank'} rel="noopener noreferrer">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Page;