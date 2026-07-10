import cards from './data/cards.json';
import {CardProps} from "@/shared/Card";

export function isCardExist(id: number | string) {
    console.log('\nisCardExist');
    console.log(`ID - ${id}`);
    console.log('type of ID - ' + typeof id);

    const strId = typeof id === 'string' ? id : id.toString();
    return cards.some(card => card.id === strId);
}

export function getCard(id: number | string) {
    console.log('\ngetCard');
    console.log(`ID - ${id}`);
    console.log('type of ID - ' + typeof id);

    const strId = typeof id === 'string' ? id : id.toString();
    if (isCardExist(strId)) {
        console.log ('success');
        return cards.find((card) => card.id === strId);
    }
    console.log(`Card with id ${strId} not found`);
    console.log ('failure');
    return null;
}

export function getAllCards() {
    console.log('\ngetAllCards');
    if (cards.length <= 0) {
        console.log('critical error, empty data');
        return [];
    }
    return cards;
}

export function addCard(card: CardProps) {

    const newCard = {
        ...card,
        id: String(card.id ?? cards.length)
    };

    if (cards.some(cardC => cardC.id === newCard.id)) {
        newCard.id = cards.length.toString();
    }

    cards.push(newCard);
}