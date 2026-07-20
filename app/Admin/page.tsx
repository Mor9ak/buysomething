"use client";
import React from 'react';
import Article from "@/shared/Article";
import CardHolder from "@/widgets/CardHolder/CardHolder";
import {CardProps} from "@/shared/Card";

const Page = () => {

    const [showCards, setShowCards] = React.useState<boolean>(false);
    const [newCard, setNewCard] = React.useState<CardProps>({id: 0, title: "Thing", text: "Text", imgSrc: "/CardHolder/imgPlaceholder.png"});

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setNewCard({
            ...newCard,
            [name]: value
        });
    }
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newCard.description && newCard.description?.length <= 4) {
            setNewCard({...newCard, description: undefined});
        }
        alert(JSON.stringify(newCard));
    }

    return (
        <div className={'flex flex-col justify-center items-center gap-9 '}>
            <Article title={'Admin panel'}/>
            <div className={'flex flex-col justify-center items-center min-w-md gap-5'}>
                {showCards && (<CardHolder/>)}
                <button className={'w-full rounded-full bg-accentCol px-7 py-2 '} onClick={() => {
                    setShowCards(!showCards)
                }}>{showCards ? 'Hide' : 'Show'} cards
                </button>
            </div>
            <Article title={'Add card'}/>
            <form className={'flex flex-col justify-center items-center gap-5 uniBorder uniPadding text-xl text-textCol'} onSubmit={handleFormSubmit}>
                <input type='number' name={'id'} placeholder={'Id'} required onChange={handleFormChange}/>
                <input type='text' name={'title'} placeholder={'Title'} required onChange={handleFormChange}/>
                <input type='text' name={'text'} placeholder={'Text'} required onChange={handleFormChange}/>
                <input type='text' name={'description'} placeholder={'Description'} onChange={handleFormChange}/>
                <input type='text' name={'imgSrc'} placeholder={'imgSrc'} onChange={handleFormChange}/>
                <button type={'submit'} className={'w-full rounded-full bg-accentCol px-7 py-2 '}>Add</button>
            </form>
        </div>
    );
}

export default Page;