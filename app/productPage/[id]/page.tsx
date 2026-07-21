import React from 'react';
import {notFound} from "next/navigation";
import Image from "next/image";
import {cards} from '@/lib/cards/data/cards';
// import {getBaseURL} from '@/lib/getBaseURL';

const ProductPage = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params;

    if (!id) {
        notFound();
    }

    const card = cards.find((card) => card.id === id);

    if (!card) {
        notFound();
    }

    // const baseURL = getBaseURL();
    // const response = await fetch(`${baseURL}/api/productPage/${id}`);
    //
    // if (!response.ok) {
    //     if (response.status === 404) {
    //         notFound()
    //     }
    //     throw new Error('Not Found');
    // }
    //
    // const card = await response.json();
    //
    // if (!card) {
    //     notFound();
    // }
    // This code became just a comment, because Vercel have some problem, with reading JSON files, so instead of using api call I'll just use json directly.

    return (
        <div className="flex flex-col md:flex-row gap-9 justify-evenly items-center text-textCol">
            <div className="flex justify-center items-center aspect-square w-[70vw] md:w-[30vw]">
                <Image src={card.imgSrc} alt={`${card.title} image`} width={100} height={100}
                       className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="flex flex-col gap-7 justify-center items-center text-wrap md:max-w-xl mx-10 md:mx-0">
                <h2 className={'text-center text-6xl font-bold '}>{card.title}</h2>
                <h3 className={'text-start text-2xl '}>{card.text}</h3>
                {card.description && <p className={'text-secTextCol'}>
                    {card.description}
                </p>}
            </div>
        </div>
    );
}

export default ProductPage;