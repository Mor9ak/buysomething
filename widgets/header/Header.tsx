import React from 'react';
import links from './data/links.json'
import Link from "next/link";

const Header = () => {
    return (
        <header className={'flex flex-row justify-between uniPadding border-b-2 border-borderCol w-full'}>
            <h2 className={'hidden w-fit text-nowrap md:flex text-2xl text-mainTextCol'}>Some store</h2>
            <ul className={'flex flex-row w-full justify-end gap-5 text-textCol text-xl'}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;