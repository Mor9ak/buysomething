import cards from '@/widgets/CardHolder/data/cards.json';

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