ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    if (!item) return;

    const id = item.id;
    const isJar = id === 'create_factory_logistics:copper_jar_package_8x8';
    const isNugget = id === 'brassworks:hyper_experience_nugget';
    const isHeap = id === 'brassworks:hyper_experience_heap';

    // EARLY EXIT: not a valid XP item
    if (!isJar && !isNugget && !isHeap) return;

    const hyperXPItems = {
        'brassworks:hyper_experience_nugget': 3,
        'brassworks:hyper_experience_heap': 12
    };

    let offsetmultiplier = 0.9999;
    let xp = 0;
    let orb = 'minecraft:experience_orb';
    let consumeAmount = 1;

    if (isJar) {
        if (!player.isCrouching()) return;

        const fluid = item?.nbt?.Fluid?.FluidName;
        const amount = item?.nbt?.Fluid?.Amount || 0;

        // EARLY EXIT: fluid is not experience or hyper_experience
        if (
            fluid !== 'create_enchantment_industry:experience' &&
            fluid !== 'create_enchantment_industry:hyper_experience'
        ) return;


        const isHyper = fluid === 'create_enchantment_industry:hyper_experience';
        const multiplier = isHyper ? 10 : 1;
        xp = Math.floor(amount * offsetmultiplier * multiplier);
        if (isHyper) orb = 'create_enchantment_industry:hyper_experience_orb';
    } else {
        const mb = hyperXPItems[id];
        const xpPerItem = Math.floor(mb * offsetmultiplier * 10);
        consumeAmount = player.isCrouching() ? 1 : item.count;
        xp = xpPerItem * consumeAmount;
        orb = 'create_enchantment_industry:hyper_experience_orb';
    }

            player.tell('hyperxp processing...');

    if (xp <= 0) return;

    const { x, y, z } = player;
    server.runCommandSilent(`summon ${orb} ${x} ${y + 1} ${z} {clumpedMap:{1:${xp}}}`);
    const pitch = (Math.random() * 0.5 + 1).toFixed(2);
    server.runCommandSilent(`playsound minecraft:block.amethyst_block.break player @a ${x} ${y + 1} ${z} 1 ${pitch}`);
    item.count -= consumeAmount;
    event.cancel();
});
