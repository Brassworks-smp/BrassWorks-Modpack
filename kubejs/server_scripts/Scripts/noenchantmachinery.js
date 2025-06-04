//dont try to be a hacker and try to bypass this, everything is serverside and i promise you it wont go well.

const blockedmachines = [
    'create:mechanical_press',
    'create:millstone',
    'create:encased_fan',
    'create:crushing_wheel',
    'create:mechanical_harvester',
    'create:mechanical_plough',
    'create:mechanical_saw',
    'create:mechanical_mixer',
    'create:mechanical_roller',
    'create:spout',
    'create_sa:copper_jetpack_chestplate'
]

// Cancel enchanting table enchantments for blocked items
MoreJSEvents.enchantmentTableEnchant(event => {
    if (blockedmachines.includes(event.item.id)) {
        event.cancel()
    }
})


// Cancel right click on blaze enchanter with blocked items
BlockEvents.rightClicked(event => {
    const { block, hand, item } = event;
    if (
        block.id === 'create_enchantment_industry:blaze_enchanter' &&
        item &&
        blockedmachines.includes(item.id)
    ) {
        event.cancel();
    }
});

//remove enchantments from enchanted machines just in case
PlayerEvents.inventoryChanged(event => {
    let player = event.player
    player.inventory.allItems.forEach(item => {
        if (blockedmachines.includes(item.id) && item.nbt) {
            if (item.nbt.Enchantments) delete item.nbt.Enchantments
            if (item.nbt.StoredEnchantments) delete item.nbt.StoredEnchantments
        }
    })
})

