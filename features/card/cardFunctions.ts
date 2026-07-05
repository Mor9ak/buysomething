import cards from '@/widgets/CardHolder/data/cards.json';

export function isCardExist(id: number | string) {
    console.log(`id: ${id}`);
    const strId = typeof id === 'string' ? id : id.toString();
    return cards.some(card => card.id === strId);
}

export function getCard(id: number | string) {
    const strId = typeof id === 'string' ? id : id.toString();
    if (isCardExist(strId)) {
        return cards.find((card) => card.id === strId);
    }
    console.log(`Card with id ${strId} not found`);
    return null;
}