import React from 'react';
import links from './data/links.json'
import Link from "next/link";

const Header = () => {
    return (
        <header className={'flex flex-row justify-between uniPadding border-b-2 border-borderCol w-full mb-5 md:mb-9'}>
            <h2 className={'hidden w-fit text-nowrap md:flex text-2xl text-mainTextCol'}>Some store</h2>
            <nav>
                <ul className={'flex flex-row w-full justify-evenly md:justify-end gap-5 text-textCol text-xl'}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;