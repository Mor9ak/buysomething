"use client"

import React from 'react';
import {Purchase} from "@/lib/purchases/data/purchases";
import {addPurchases, MakeKeyOptional} from "@/lib/purchases/purchasesFunctions";

type PurchaseProps = MakeKeyOptional<Purchase, 'date'>;

const BuyButton = (props: PurchaseProps) => {

    let date: string;

    if (!props.date) {
        date = new Date().toISOString();
    } else date = props.date;

    return (
        <button type='button' onClick={() => {
            addPurchases({id: props.id, title: props.title, date: date});
            alert('Purchased!');
        }} className={'flex flex-xl bg-accentCol text-mainTextCol w-full md:w-fit py-1 px-7 rounded-full'}>Buy
        </button>
    );
}

export default BuyButton;