const blockedItems = [
    "numismatics:brass_depositor",
    "numismatics:andesite_depositor",
    "numismatics:creative_vendor",
    "numismatics:vendor"
];

// Remove crafting recipes
ServerEvents.recipes(event => {
    blockedItems.forEach(itemId => {
        event.remove({ output: itemId });
    });
});

// Prevent players from picking up blocked items
ItemEvents.canPickUp(event => {
    if (blockedItems.includes(event.item.id)) {
        event.cancel();
    }
});

// Remove blocked items from inventory when players log in
PlayerEvents.loggedIn(event => {
    let player = event.player;
    let inv = player.inventory;

    blockedItems.forEach(itemId => {
        inv.clear(Item.of(itemId));
    });
});

// Prevent right-clicking with blocked items
ItemEvents.rightClicked(event => {
    if (blockedItems.includes(event.item.id)) {
        event.player.tell("Cet item a été supprimé du jeu !");
        event.cancel();
    }
});

// Prevent placing blocked blocks
BlockEvents.placed(event => {
    if (blockedItems.includes(event.item.id)) {
        event.player.tell("Ce bloc a été supprimé du jeu !");
        event.cancel();
    }
});

// Allow breaking blocked blocks (removes them from the world)
BlockEvents.broken(event => {
    if (blockedItems.includes(event.block.id)) {
        event.player.tell("This block has been removed from the game!");
    }
});

ServerEvents.tags('item', event => {
    event.add('forge:hidden', blockedItems);
});

