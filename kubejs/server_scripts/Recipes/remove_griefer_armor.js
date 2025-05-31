const armorPieces = [
    'savage_and_ravage:griefer_helmet',
    'savage_and_ravage:griefer_chestplate',
    'savage_and_ravage:griefer_leggings',
    'savage_and_ravage:griefer_boots'
];

ServerEvents.recipes(event => {
    armorPieces.forEach(item => {
        event.remove({ output: item });
    });
});

// Hide removed armor from creative inventory / JEI
ServerEvents.tags('item', event => {
    event.add('forge:hidden', armorPieces);
});