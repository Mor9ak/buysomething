import React from 'react';
import {notFound} from "next/navigation";
import {getCard} from "@/features/card/cardFunctions";
import Image from "next/image";

const ProductPage = async ({params}: { params: Promise<{ id: string }> }) => {

    const {id} = await params;

    if (!id) {
        notFound();
    }

    const card = getCard(id);
    if (!card) {
        notFound();
    }

    return (
        <div className="flex flex-col md:flex-row gap-9 justify-evenly items-center text-textCol">
            <div className="flex justify-center items-center aspect-square w-[70vw] md:w-[30vw]">
                <Image src={card.imgSrc} alt={`${card.title} image`} width={100} height={100}
                       className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="flex flex-col gap-7 justify-center items-center text-wrap md:max-w-xl mx-5 md:mx-0">
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