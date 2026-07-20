import React from 'react';
import Link from "next/link";
import text from './data/text.json';

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-3 w-full bg-secBgCol border-t-2 border-borderCol mt-5 md:mt-9 uniPadding text-secTextCol text-wrap static md:fixed md:bottom-0">
            <h4 className={'text-center'}>{text.upperText.text}<Link href={text.upperText.linkHref} target={'_blank'} rel={'noopener noreferrer'}>{text.upperText.linkText}</Link></h4>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7">
                {text.links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;