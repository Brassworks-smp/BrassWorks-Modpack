BlockEvents.rightClicked(event => {
    const { block, hand, item } = event;
    if (hand != 'MAIN_HAND') return;
    if (!block) return;

    // Check for bonemeal or seed pouch with bonemeal
    let isBonemeal = item.id == 'minecraft:bone_meal';
    let isSeedPouchWithBonemeal = false;

    if (item.id == 'quark:seed_pouch' && item.nbt) {
        let stored = item.nbt.storedItem;
        if (stored && stored.id == 'minecraft:bone_meal' && item.nbt.itemCount > 0) {
            isSeedPouchWithBonemeal = true;
        }
    }

    if (
        (isBonemeal || isSeedPouchWithBonemeal) &&
        (block.hasTag('brassworks:small_flowers') || block.hasTag('brassworks:tall_flowers'))
    ) {
        if (isBonemeal) {
            item.shrink(1);
        } else if (isSeedPouchWithBonemeal) {
            item.nbt.itemCount = item.nbt.itemCount - 1;
        }
        block.popItem(block.id);
        event.server.runCommandSilent(`playsound minecraft:item.bone_meal.use block @a ${block.x} ${block.y} ${block.z}`);
    }
});